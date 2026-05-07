/* ─────────────────────────────────────────────────────────────────────────────
   app.js  –  HTML & CSS Predict
   ───────────────────────────────────────────────────────────────────────────── */

(() => {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  let sessionQuestions = [];   // filtered & shuffled question list
  let currentIndex     = 0;
  let scores           = [];   // array of 'correct' | 'partial' | 'wrong' | null
  let sessionConfig    = { difficulty: '', type: '' };

  // ── Helpers ────────────────────────────────────────────────────────────────
  const $  = id => document.getElementById(id);
  const show = el => el.classList.remove('hidden');
  const hide = el => el.classList.add('hidden');

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
  }

  /** Safely write HTML into an iframe */
  function writeIframe(iframe, html) {
    // Size the iframe to its content after writing
    iframe.srcdoc = html;
    iframe.onload = () => {
      try {
        const body = iframe.contentDocument && iframe.contentDocument.body;
        if (body) {
          const h = body.scrollHeight;
          iframe.style.height = Math.max(h + 24, 120) + 'px';
        }
      } catch (_) { /* cross-origin guard */ }
    };
  }

  /** Escape HTML for display in a <pre> */
  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** Shuffle array in place (Fisher-Yates) */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ── Build session question list ────────────────────────────────────────────
  function buildSession(difficulty, type) {
    let pool = questions.filter(q => q.mode === difficulty);
    if (type !== 'mixed') {
      pool = pool.filter(q => q.type === type);
    }
    return shuffle([...pool]);
  }

  // ── Render a question ──────────────────────────────────────────────────────
  function renderQuestion(index) {
    const q = sessionQuestions[index];

    // top bar
    $('qDifficultyBadge').textContent = sessionConfig.difficulty === 'basic' ? 'Basic' : 'Advanced';
    $('qDifficultyBadge').className = 'option-badge ' + sessionConfig.difficulty;

    const typeLabel = sessionConfig.type === 'mixed'
      ? (q.type === 'code-to-output' ? 'Code → Output' : 'Output → Code')
      : (sessionConfig.type === 'code-to-output' ? 'Code → Output' : 'Output → Code');
    $('qTypeBadge').textContent = typeLabel;
    $('qCounter').textContent   = `Q${index + 1} of ${sessionQuestions.length}`;

    const pct = ((index) / sessionQuestions.length) * 100;
    $('progressBar').style.width = pct + '%';

    // title & description
    $('qTitle').textContent = q.title;
    $('qDescription').textContent = q.description || '';

    // reset hint
    $('hintBox').textContent = '';
    hide($('hintBox'));
    $('hintBtn').textContent = '💡 Show hint';

    // reset nav
    hide($('qNav'));

    // show correct areas
    if (q.type === 'code-to-output') {
      renderCodeToOutput(q);
    } else {
      renderOutputToCode(q);
    }
  }

  function renderCodeToOutput(q) {
    hide($('outputDisplay'));
    hide($('codeInputArea'));
    show($('codeDisplay'));
    show($('predictArea'));

    // CSS block (advanced: q.code = CSS, q.htmlCode = HTML; basic: q.code = HTML only)
    const cssLabelEl = document.querySelector('#codeDisplay .css-label');
    if (q.htmlCode) {
      // advanced – show both CSS and HTML blocks
      $('cssCodeBlock').textContent = q.code || '';
      show($('cssCodeBlock'));
      if (cssLabelEl) show(cssLabelEl);
    } else {
      // basic – hide CSS block
      hide($('cssCodeBlock'));
      if (cssLabelEl) hide(cssLabelEl);
    }

    // HTML block
    $('htmlCodeBlock').textContent = q.htmlCode || q.code || '';

    // reset reveal
    hide($('revealBox'));
    $('revealFrame').srcdoc = '';
    $('sketchNotes').value = '';

    // reset assess buttons
    $('revealBox').querySelectorAll('.assess-btn').forEach(b => {
      b.disabled = false;
      b.classList.remove('selected');
    });

    // Hint
    $('hintBtn').dataset.hint = q.hint || '';
  }

  function renderOutputToCode(q) {
    hide($('codeDisplay'));
    hide($('predictArea'));
    show($('outputDisplay'));
    show($('codeInputArea'));

    writeIframe($('outputFrame'), q.outputHTML);

    // reset student area
    $('studentCode').value = '';
    hide($('studentPreviewBox'));
    hide($('modelAnswerBox'));
    $('studentPreviewFrame').srcdoc = '';
    $('modelAnswerCode').textContent = '';

    $('modelAnswerBox').querySelectorAll('.assess-btn').forEach(b => {
      b.disabled = false;
      b.classList.remove('selected');
    });

    $('hintBtn').dataset.hint = q.hint || '';
  }

  // ── Self-assess handler (shared) ───────────────────────────────────────────
  function handleAssess(btn) {
    const score = btn.dataset.score;
    scores[currentIndex] = score;

    // disable all sibling buttons, highlight chosen
    btn.closest('.assess-btns').querySelectorAll('.assess-btn').forEach(b => {
      b.disabled = true;
      b.classList.remove('selected');
    });
    btn.classList.add('selected');

    show($('qNav'));
    $('progressBar').style.width = ((currentIndex + 1) / sessionQuestions.length * 100) + '%';
  }

  // ── Results ────────────────────────────────────────────────────────────────
  function showResults() {
    const correct = scores.filter(s => s === 'correct').length;
    const partial = scores.filter(s => s === 'partial').length;
    const wrong   = scores.filter(s => s === 'wrong').length;
    const total   = sessionQuestions.length;

    const points = correct * 2 + partial * 1;
    const maxPts = total * 2;
    const pct    = Math.round((points / maxPts) * 100);

    let emoji = pct >= 80 ? '🌟' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';

    $('scoreDisplay').textContent = `${pct}% ${emoji}`;
    $('scoreBreakdown').innerHTML = `
      <span><strong style="color:var(--correct)">${correct}</strong><span class="label">Got it</span></span>
      <span><strong style="color:var(--partial)">${partial}</strong><span class="label">Mostly right</span></span>
      <span><strong style="color:var(--wrong)">${wrong}</strong><span class="label">Missed it</span></span>
      <span><strong>${total}</strong><span class="label">Questions</span></span>
    `;

    showScreen('resultsScreen');
  }

  // ── Event Wiring ───────────────────────────────────────────────────────────

  // Home: option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const difficulty = btn.dataset.difficulty;
      const type       = btn.dataset.type;
      sessionConfig    = { difficulty, type };
      sessionQuestions = buildSession(difficulty, type);

      if (sessionQuestions.length === 0) {
        alert('No questions available for that combination yet.');
        return;
      }

      currentIndex = 0;
      scores = new Array(sessionQuestions.length).fill(null);
      showScreen('questionScreen');
      renderQuestion(0);
    });
  });

  // Reference panel toggle
  $('toggleRefBtn').addEventListener('click', () => {
    const panel = $('referencePanel');
    const hidden = panel.classList.toggle('hidden');
    $('toggleRefBtn').textContent = hidden
      ? '📖 Show HTML & CSS Reference'
      : '📖 Hide Reference';
  });

  // Back to home
  $('backBtn').addEventListener('click', () => showScreen('homeScreen'));

  // Hint
  $('hintBtn').addEventListener('click', () => {
    const hint = $('hintBtn').dataset.hint;
    if (!hint) return;
    const box = $('hintBox');
    if (box.classList.contains('hidden')) {
      box.textContent = hint;
      show(box);
      $('hintBtn').textContent = '💡 Hide hint';
    } else {
      hide(box);
      $('hintBtn').textContent = '💡 Show hint';
    }
  });

  // Reveal output (code-to-output)
  $('revealBtn').addEventListener('click', () => {
    const q = sessionQuestions[currentIndex];
    const revealBox = $('revealBox');
    show(revealBox);
    writeIframe($('revealFrame'), q.outputHTML);
    $('revealBtn').disabled = true;
  });

  // Preview student code (output-to-code)
  $('previewBtn').addEventListener('click', () => {
    const code = $('studentCode').value.trim();
    if (!code) return;
    const box = $('studentPreviewBox');
    show(box);
    writeIframe($('studentPreviewFrame'), code);
  });

  // Show model answer (output-to-code)
  $('showAnswerBtn').addEventListener('click', () => {
    const q = sessionQuestions[currentIndex];
    const box = $('modelAnswerBox');
    show(box);
    $('modelAnswerCode').textContent = q.answer;
    $('showAnswerBtn').disabled = true;
  });

  // Self-assess (event delegation on the whole question screen)
  $('questionScreen').addEventListener('click', e => {
    if (e.target.classList.contains('assess-btn')) {
      handleAssess(e.target);
    }
  });

  // Next question
  $('nextBtn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= sessionQuestions.length) {
      showResults();
    } else {
      renderQuestion(currentIndex);
      // Reset reveal button state
      $('revealBtn').disabled = false;
      $('showAnswerBtn').disabled = false;
    }
  });

  // Results: retry same session
  $('retryBtn').addEventListener('click', () => {
    sessionQuestions = buildSession(sessionConfig.difficulty, sessionConfig.type);
    currentIndex = 0;
    scores = new Array(sessionQuestions.length).fill(null);
    showScreen('questionScreen');
    renderQuestion(0);
    $('revealBtn').disabled = false;
    $('showAnswerBtn').disabled = false;
  });

  // Results: back to home
  $('homeBtn').addEventListener('click', () => showScreen('homeScreen'));

  // ── Tab key support in textarea (insert 2 spaces) ─────────────────────────
  $('studentCode').addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta  = e.target;
      const s   = ta.selectionStart;
      const end = ta.selectionEnd;
      ta.value = ta.value.substring(0, s) + '  ' + ta.value.substring(end);
      ta.selectionStart = ta.selectionEnd = s + 2;
    }
  });

})();
