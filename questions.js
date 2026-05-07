const questions = [
  // ── BASIC (HTML only) ──────────────────────────────────────────────────────

  {
    id: "b01",
    mode: "basic",
    type: "code-to-output",  // show code → student sketches output
    title: "Headings & Paragraph",
    code: `<h1>Welcome to our website</h1>
<h2>About Us</h2>
<p>We are a small company based in London.</p>`,
    hint: "Think about how h1, h2 and p elements are rendered — heading sizes and paragraph spacing.",
    outputHTML: `<h1>Welcome to our website</h1>
<h2>About Us</h2>
<p>We are a small company based in London.</p>`
  },

  {
    id: "b02",
    mode: "basic",
    type: "output-to-code",  // show output → student writes code
    title: "Reasons to Choose Us (unordered list)",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<h2>Reasons to Choose Us</h2>
<p>Come play <em>Laser Tag</em> with us for:</p>
<ul>
  <li>State of the art equipment</li>
  <li>Friendly staff</li>
  <li>Match recordings available to purchase</li>
  <li>Buy two games get one free.</li>
</ul>`,
    answer: `<h2>Reasons to Choose Us</h2>
<p>Come play <em>Laser Tag</em> with us for:</p>
<ul>
  <li>State of the art equipment</li>
  <li>Friendly staff</li>
  <li>Match recordings available to purchase</li>
  <li>Buy two games get one free.</li>
</ul>`,
    hint: "You need an h2, a paragraph containing italic text (em), and an unordered list (ul) with four list items (li)."
  },

  {
    id: "b03",
    mode: "basic",
    type: "output-to-code",
    title: "Upcoming Productions (ordered list + link)",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<p>Upcoming productions:</p>
<ol>
  <li>Macbeth</li>
  <li>Blood Brothers</li>
  <li>An Inspector Calls</li>
</ol>
<a href="bookings.html">Book tickets</a>`,
    answer: `<p>Upcoming productions:</p>
<ol>
  <li>Macbeth</li>
  <li>Blood Brothers</li>
  <li>An Inspector Calls</li>
</ol>
<a href="bookings.html">Book tickets</a>`,
    hint: "You need a paragraph, an ordered list (ol) with three list items, and an anchor tag with href=\"bookings.html\" linking to the text 'Book tickets'."
  },

  {
    id: "b04",
    mode: "basic",
    type: "code-to-output",
    title: "Image with attributes",
    code: `<h1>Our Gallery</h1>
<img src="photo.jpg" alt="A sunny beach" width="300" height="200">
<p>Photos from our summer trip.</p>`,
    hint: "The img tag is self-closing. Consider the alt text, and the effect of width and height attributes.",
    outputHTML: `<h1>Our Gallery</h1>
<img src="photo.jpg" alt="A sunny beach" width="300" height="200">
<p>Photos from our summer trip.</p>`
  },

  {
    id: "b05",
    mode: "basic",
    type: "output-to-code",
    title: "Simple form",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<h2>Contact Us</h2>
<form>
  <p>Name: <input type="text" name="username"></p>
  <p>Email: <input type="text" name="email"></p>
  <input type="submit" value="Send">
</form>`,
    answer: `<h2>Contact Us</h2>
<form>
  <p>Name: <input type="text" name="username"></p>
  <p>Email: <input type="text" name="email"></p>
  <input type="submit" value="Send">
</form>`,
    hint: "You need a form containing two text inputs and a submit button. Use name=\"username\" for the Name field and name=\"email\" for the Email field. The submit button has value=\"Send\"."
  },

  {
    id: "b06",
    mode: "basic",
    type: "code-to-output",
    title: "Navigation links",
    code: `<h1>My Site</h1>
<div>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<p>Welcome to my site.</p>`,
    hint: "Anchor tags render as clickable links inline. A div is a block-level container.",
    outputHTML: `<h1>My Site</h1>
<div>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<p>Welcome to my site.</p>`
  },

  {
    id: "b07",
    mode: "basic",
    type: "output-to-code",
    title: "Full page structure",
    description: "Write the complete HTML page structure that produces the output shown.",
    outputHTML: `<h1>School Website</h1>
<h2>News</h2>
<p>Sports day is on Friday.</p>
<h2>Events</h2>
<ul>
  <li>Bake sale – Monday</li>
  <li>Drama show – Wednesday</li>
</ul>`,
    answer: `<html>
  <head>
    <title>School Website</title>
  </head>
  <body>
    <h1>School Website</h1>
    <h2>News</h2>
    <p>Sports day is on Friday.</p>
    <h2>Events</h2>
    <ul>
      <li>Bake sale – Monday</li>
      <li>Drama show – Wednesday</li>
    </ul>
  </body>
</html>`,
    hint: "Wrap everything in html, head and body elements. The title element (inside head) should contain 'School Website' — this matches the h1 text."
  },

  {
    id: "b08",
    mode: "basic",
    type: "code-to-output",
    title: "Headings h1–h3",
    code: `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>
<p>This is a paragraph beneath the headings.</p>`,
    hint: "h1 is the largest heading, h3 is smaller. All are block elements.",
    outputHTML: `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>
<p>This is a paragraph beneath the headings.</p>`
  },

  // ── ADVANCED (HTML + CSS) ──────────────────────────────────────────────────

  {
    id: "a01",
    mode: "advanced",
    type: "code-to-output",
    title: "Coloured heading with CSS",
    code: `/* CSS */
h1 {
  color: blue;
  font-family: Arial;
  font-size: 32px;
}
h2 {
  color: #A2441B;
}`,
    htmlCode: `<h1>Welcome</h1>
<h2>About Us</h2>
<p>We are here to help.</p>`,
    hint: "Think about how color and font-family affect the heading appearance.",
    outputHTML: `<style>h1{color:blue;font-family:Arial;font-size:32px;}h2{color:#A2441B;}</style>
<h1>Welcome</h1>
<h2>About Us</h2>
<p>We are here to help.</p>`
  },

  {
    id: "a02",
    mode: "advanced",
    type: "output-to-code",
    title: "Styled info box",
    description: "Write the HTML and CSS that produces the output shown.",
    outputHTML: `<style>
.infoBox {
  background-color: green;
  color: white;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  width: 300px;
  height: 100px;
}
</style>
<div class="infoBox">
  <p>This is an information box.</p>
</div>`,
    answer: `/* CSS */
.infoBox {
  background-color: green;
  color: white;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  width: 300px;
  height: 100px;
}

<!-- HTML -->
<div class="infoBox">
  <p>This is an information box.</p>
</div>`,
    hint: "The div uses class=\"infoBox\". CSS: background-color: green; color: white; border-style: solid; border-color: black; border-width: 2px; width: 300px; height: 100px."
  },

  {
    id: "a03",
    mode: "advanced",
    type: "code-to-output",
    title: "CSS ID selector – menu bar",
    code: `/* CSS */
#menu {
  background-color: #A2441B;
  height: 40px;
  width: 100%;
}
#menu a {
  color: white;
  font-family: Arial;
}`,
    htmlCode: `<div id="menu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<h1>Main Content</h1>`,
    hint: "The #menu ID selector targets the specific div. Consider the background colour (#A2441B is a brownish-red) and the white link text.",
    outputHTML: `<style>#menu{background-color:#A2441B;height:40px;width:100%;padding:8px;}#menu a{color:white;font-family:Arial;margin-right:12px;}</style>
<div id="menu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<h1>Main Content</h1>`
  },

  {
    id: "a04",
    mode: "advanced",
    type: "output-to-code",
    title: "Styled form",
    description: "Write the HTML and CSS that produces the output shown.",
    outputHTML: `<style>
h2 { color: blue; font-family: Arial; }
.formBox {
  background-color: lightgrey;
  border-style: solid;
  border-color: darkgrey;
  border-width: 1px;
  width: 350px;
  height: 180px;
}
</style>
<h2>Sign Up</h2>
<div class="formBox">
  <form>
    <p>Username: <input type="text" name="username"></p>
    <p>Password: <input type="text" name="password"></p>
    <input type="submit" value="Register">
  </form>
</div>`,
    answer: `/* CSS */
h2 {
  color: blue;
  font-family: Arial;
}
.formBox {
  background-color: lightgrey;
  border-style: solid;
  border-color: darkgrey;
  border-width: 1px;
  width: 350px;
  height: 180px;
}

<!-- HTML -->
<h2>Sign Up</h2>
<div class="formBox">
  <form>
    <p>Username: <input type="text" name="username"></p>
    <p>Password: <input type="text" name="password"></p>
    <input type="submit" value="Register">
  </form>
</div>`,
    hint: "The wrapping div uses class=\"formBox\". Input name attributes: name=\"username\" and name=\"password\". CSS for .formBox: background-color: lightgrey; border-style: solid; border-color: darkgrey; border-width: 1px; width: 350px; height: 180px."
  },

  {
    id: "a05",
    mode: "advanced",
    type: "code-to-output",
    title: "Styled list with class",
    code: `/* CSS */
h1 {
  color: navy;
  font-size: 28px;
}
.highlight {
  background-color: yellow;
  font-size: 18px;
}`,
    htmlCode: `<h1>Top Scores</h1>
<ol>
  <li class="highlight">Alice – 98</li>
  <li>Bob – 87</li>
  <li class="highlight">Carol – 95</li>
</ol>`,
    hint: "Only li elements with class=\"highlight\" get the yellow background. The h1 is navy with a larger font-size.",
    outputHTML: `<style>h1{color:navy;font-size:28px;}.highlight{background-color:yellow;font-size:18px;}</style>
<h1>Top Scores</h1>
<ol>
  <li class="highlight">Alice – 98</li>
  <li>Bob – 87</li>
  <li class="highlight">Carol – 95</li>
</ol>`
  },

  {
    id: "a06",
    mode: "advanced",
    type: "output-to-code",
    title: "Full styled page with link to CSS",
    description: "Write the full HTML page and a separate CSS file that produces the output shown. The HTML page should link to a file called style.css.",
    outputHTML: `<style>
body { font-family: Arial; }
h1 { color: blue; font-size: 36px; }
#footer { background-color: darkgrey; color: white; height: 50px; }
</style>
<h1>My Portfolio</h1>
<p>Welcome to my portfolio website.</p>
<ul>
  <li><a href="projects.html">Projects</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
<div id="footer">
  <p>© 2025 My Portfolio</p>
</div>`,
    answer: `<!-- index.html -->
<html>
  <head>
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>My Portfolio</h1>
    <p>Welcome to my portfolio website.</p>
    <ul>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div id="footer">
      <p>© 2025 My Portfolio</p>
    </div>
  </body>
</html>

/* style.css */
body {
  font-family: Arial;
}
h1 {
  color: blue;
  font-size: 36px;
}
#footer {
  background-color: darkgrey;
  color: white;
  height: 50px;
}`,
    hint: "The html page needs a link element (rel=\"stylesheet\" href=\"style.css\") in the head. Title should be 'My Portfolio'. The footer div uses id=\"footer\". CSS: h1 font-size: 36px; #footer height: 50px."
  },

  // ── BASIC – additional ─────────────────────────────────────────────────────

  {
    id: "b09",
    mode: "basic",
    type: "code-to-output",
    title: "Link inside a paragraph",
    code: `<h1>Help Centre</h1>
<p>Visit our <a href="faq.html">FAQ page</a> for answers.</p>
<p>Or <a href="contact.html">contact us</a> directly.</p>`,
    hint: "The anchor tag sits inside the paragraph — the surrounding text is still part of the p element.",
    outputHTML: `<h1>Help Centre</h1>
<p>Visit our <a href="faq.html">FAQ page</a> for answers.</p>
<p>Or <a href="contact.html">contact us</a> directly.</p>`
  },

  {
    id: "b10",
    mode: "basic",
    type: "output-to-code",
    title: "Image with a caption",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<h2>Photo of the Week</h2>
<img src="sunset.jpg" alt="A beautiful sunset" width="400" height="250">
<p>Taken at the coast last summer.</p>`,
    answer: `<h2>Photo of the Week</h2>
<img src="sunset.jpg" alt="A beautiful sunset" width="400" height="250">
<p>Taken at the coast last summer.</p>`,
    hint: "You need an h2, then a self-closing img tag with these exact attributes: src=\"sunset.jpg\", alt=\"A beautiful sunset\", width=\"400\", height=\"250\". Then a paragraph."
  },

  {
    id: "b11",
    mode: "basic",
    type: "output-to-code",
    title: "Registration form",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<h2>Create an Account</h2>
<form>
  <p>First name: <input type="text" name="firstname"></p>
  <p>Last name: <input type="text" name="lastname"></p>
  <p>Email: <input type="text" name="email"></p>
  <input type="submit" value="Register">
</form>`,
    answer: `<h2>Create an Account</h2>
<form>
  <p>First name: <input type="text" name="firstname"></p>
  <p>Last name: <input type="text" name="lastname"></p>
  <p>Email: <input type="text" name="email"></p>
  <input type="submit" value="Register">
</form>`,
    hint: "Three text inputs with name=\"firstname\", name=\"lastname\", name=\"email\". The submit button has value=\"Register\"."
  },

  {
    id: "b12",
    mode: "basic",
    type: "code-to-output",
    title: "Ordered list of steps",
    code: `<h2>How to book</h2>
<ol>
  <li>Choose a date</li>
  <li>Select the number of tickets</li>
  <li>Enter your payment details</li>
  <li>Click Confirm</li>
</ol>
<p>Bookings close 24 hours before the event.</p>`,
    hint: "An ol produces a numbered list. Each li is a separate numbered item.",
    outputHTML: `<h2>How to book</h2>
<ol>
  <li>Choose a date</li>
  <li>Select the number of tickets</li>
  <li>Enter your payment details</li>
  <li>Click Confirm</li>
</ol>
<p>Bookings close 24 hours before the event.</p>`
  },

  {
    id: "b13",
    mode: "basic",
    type: "output-to-code",
    title: "Two sections in divs",
    description: "Write the HTML that produces the output shown.",
    outputHTML: `<h1>Community Centre</h1>
<div>
  <h2>Opening Times</h2>
  <p>Monday to Friday: 9am – 5pm</p>
</div>
<div>
  <h2>Find Us</h2>
  <p>12 High Street, Springfield</p>
  <a href="map.html">View map</a>
</div>`,
    answer: `<h1>Community Centre</h1>
<div>
  <h2>Opening Times</h2>
  <p>Monday to Friday: 9am – 5pm</p>
</div>
<div>
  <h2>Find Us</h2>
  <p>12 High Street, Springfield</p>
  <a href="map.html">View map</a>
</div>`,
    hint: "Use two separate div elements. The second div contains a h2, a p and an anchor tag with href=\"map.html\" linking to 'View map'."
  },

  {
    id: "b14",
    mode: "basic",
    type: "code-to-output",
    title: "Mixed content page",
    code: `<h1>Book Club</h1>
<p>Welcome to our monthly book club.</p>
<h2>This month's read</h2>
<img src="book.jpg" alt="Cover of the selected book" width="150" height="220">
<h2>Members</h2>
<ul>
  <li>Alice</li>
  <li>Ben</li>
  <li>Chloe</li>
</ul>
<a href="signup.html">Join the club</a>`,
    hint: "The page has two h2 sections. The image will show a broken image icon (src does not exist) but its dimensions still apply.",
    outputHTML: `<h1>Book Club</h1>
<p>Welcome to our monthly book club.</p>
<h2>This month's read</h2>
<img src="book.jpg" alt="Cover of the selected book" width="150" height="220">
<h2>Members</h2>
<ul>
  <li>Alice</li>
  <li>Ben</li>
  <li>Chloe</li>
</ul>
<a href="signup.html">Join the club</a>`
  },

  {
    id: "b15",
    mode: "basic",
    type: "output-to-code",
    title: "Full page with title",
    description: "Write the complete HTML page (including html, head, title and body tags) that produces the output shown.",
    outputHTML: `<h1>Tasty Recipes</h1>
<h2>Ingredients</h2>
<ul>
  <li>200g flour</li>
  <li>100g butter</li>
  <li>2 eggs</li>
</ul>
<a href="method.html">See method</a>`,
    answer: `<html>
  <head>
    <title>Tasty Recipes</title>
  </head>
  <body>
    <h1>Tasty Recipes</h1>
    <h2>Ingredients</h2>
    <ul>
      <li>200g flour</li>
      <li>100g butter</li>
      <li>2 eggs</li>
    </ul>
    <a href="method.html">See method</a>
  </body>
</html>`,
    hint: "Wrap everything in html, head and body elements. The title (inside head) should be 'Tasty Recipes'. The link at the bottom has href=\"method.html\"."
  },

  {
    id: "b16",
    mode: "basic",
    type: "code-to-output",
    title: "Form with heading and link",
    code: `<h1>Log In</h1>
<form>
  <p>Username: <input type="text" name="username"></p>
  <p>Password: <input type="text" name="password"></p>
  <input type="submit" value="Log in">
</form>
<p><a href="register.html">Don't have an account? Sign up</a></p>`,
    hint: "Note the anchor tag is inside a paragraph below the form. Password here uses type=\"text\" (as per the OCR spec — type=\"password\" is not required).",
    outputHTML: `<h1>Log In</h1>
<form>
  <p>Username: <input type="text" name="username"></p>
  <p>Password: <input type="text" name="password"></p>
  <input type="submit" value="Log in">
</form>
<p><a href="register.html">Don't have an account? Sign up</a></p>`
  },

  // ── ADVANCED – additional ──────────────────────────────────────────────────

  {
    id: "a07",
    mode: "advanced",
    type: "code-to-output",
    title: "Body and heading styles",
    code: `/* CSS */
body {
  font-family: Arial;
  background-color: lightyellow;
}
h1 {
  color: darkgreen;
  font-size: 30px;
}
p {
  color: black;
  font-size: 14px;
}`,
    htmlCode: `<h1>Nature Blog</h1>
<p>Welcome to my blog about the natural world.</p>
<p>New posts every week.</p>`,
    hint: "The body rule applies to the whole page background. Each CSS rule targets a different element type.",
    outputHTML: `<style>body{font-family:Arial;background-color:lightyellow;}h1{color:darkgreen;font-size:30px;}p{color:black;font-size:14px;}</style>
<h1>Nature Blog</h1>
<p>Welcome to my blog about the natural world.</p>
<p>New posts every week.</p>`
  },

  {
    id: "a08",
    mode: "advanced",
    type: "output-to-code",
    title: "Styled header div",
    description: "Write the HTML and CSS that produces the output shown.",
    outputHTML: `<style>
#header {
  background-color: navy;
  color: white;
  height: 60px;
  width: 100%;
  font-family: Arial;
}
#header h1 {
  font-size: 24px;
}
p {
  color: black;
  font-size: 16px;
}
</style>
<div id="header">
  <h1>Sports Club</h1>
</div>
<p>Join us for training every Tuesday and Thursday.</p>`,
    answer: `/* CSS */
#header {
  background-color: navy;
  color: white;
  height: 60px;
  width: 100%;
  font-family: Arial;
}
#header h1 {
  font-size: 24px;
}
p {
  color: black;
  font-size: 16px;
}

<!-- HTML -->
<div id="header">
  <h1>Sports Club</h1>
</div>
<p>Join us for training every Tuesday and Thursday.</p>`,
    hint: "The div uses id=\"header\". CSS: #header height: 60px; width: 100%; #header h1 font-size: 24px; p font-size: 16px."
  },

  {
    id: "a09",
    mode: "advanced",
    type: "code-to-output",
    title: "Border properties",
    code: `/* CSS */
.notice {
  border-style: solid;
  border-color: red;
  border-width: 3px;
  width: 300px;
  height: 80px;
  background-color: white;
}
h2 {
  color: red;
  font-family: Arial;
}`,
    htmlCode: `<h2>Important Notice</h2>
<div class="notice">
  <p>The office will be closed on Monday.</p>
</div>`,
    hint: "The .notice class draws a red solid border around the div. The h2 is styled separately with a matching red colour.",
    outputHTML: `<style>.notice{border-style:solid;border-color:red;border-width:3px;width:300px;height:80px;background-color:white;}h2{color:red;font-family:Arial;}</style>
<h2>Important Notice</h2>
<div class="notice">
  <p>The office will be closed on Monday.</p>
</div>`
  },

  {
    id: "a10",
    mode: "advanced",
    type: "output-to-code",
    title: "Two styled boxes",
    description: "Write the HTML and CSS that produces the output shown.",
    outputHTML: `<style>
h1 {
  font-family: Arial;
  color: purple;
}
.box {
  border-style: solid;
  border-color: purple;
  border-width: 2px;
  width: 250px;
  height: 70px;
  background-color: lavender;
}
</style>
<h1>Choose a Category</h1>
<div class="box"><p>Sports</p></div>
<div class="box"><p>Music</p></div>`,
    answer: `/* CSS */
h1 {
  font-family: Arial;
  color: purple;
}
.box {
  border-style: solid;
  border-color: purple;
  border-width: 2px;
  width: 250px;
  height: 70px;
  background-color: lavender;
}

<!-- HTML -->
<h1>Choose a Category</h1>
<div class="box"><p>Sports</p></div>
<div class="box"><p>Music</p></div>`,
    hint: "Both divs use class=\"box\". CSS: .box width: 250px; height: 70px; border-style: solid; border-color: purple; border-width: 2px; background-color: lavender."
  },

  {
    id: "a11",
    mode: "advanced",
    type: "code-to-output",
    title: "Class on list items",
    code: `/* CSS */
h2 {
  color: blue;
  font-family: Arial;
}
.available {
  background-color: lightgreen;
}
.unavailable {
  background-color: pink;
}`,
    htmlCode: `<h2>Room Availability</h2>
<ul>
  <li class="available">Room 101 – Available</li>
  <li class="unavailable">Room 102 – Booked</li>
  <li class="available">Room 103 – Available</li>
  <li class="unavailable">Room 104 – Booked</li>
</ul>`,
    hint: "Each li has one of two classes. Think about which background colour applies to which items.",
    outputHTML: `<style>h2{color:blue;font-family:Arial;}.available{background-color:lightgreen;}.unavailable{background-color:pink;}</style>
<h2>Room Availability</h2>
<ul>
  <li class="available">Room 101 – Available</li>
  <li class="unavailable">Room 102 – Booked</li>
  <li class="available">Room 103 – Available</li>
  <li class="unavailable">Room 104 – Booked</li>
</ul>`
  },

  {
    id: "a12",
    mode: "advanced",
    type: "output-to-code",
    title: "Styled page with external CSS",
    description: "Write the full HTML page and a separate CSS file that produces the output shown. The HTML page should link to a file called style.css.",
    outputHTML: `<style>
body { font-family: Arial; background-color: white; }
h1 { color: blue; font-size: 28px; }
h2 { color: green; font-size: 20px; }
#sidebar {
  background-color: lightblue;
  width: 200px;
  height: 150px;
  border-style: solid;
  border-color: blue;
  border-width: 1px;
}
</style>
<h1>School Portal</h1>
<div id="sidebar">
  <h2>Quick Links</h2>
  <ul>
    <li><a href="timetable.html">Timetable</a></li>
    <li><a href="news.html">News</a></li>
  </ul>
</div>`,
    answer: `<!-- index.html -->
<html>
  <head>
    <title>School Portal</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>School Portal</h1>
    <div id="sidebar">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="timetable.html">Timetable</a></li>
        <li><a href="news.html">News</a></li>
      </ul>
    </div>
  </body>
</html>

/* style.css */
body {
  font-family: Arial;
  background-color: white;
}
h1 {
  color: blue;
  font-size: 28px;
}
h2 {
  color: green;
  font-size: 20px;
}
#sidebar {
  background-color: lightblue;
  width: 200px;
  height: 150px;
  border-style: solid;
  border-color: blue;
  border-width: 1px;
}`,
    hint: "Title should be 'School Portal'. Link to style.css in the head. The div uses id=\"sidebar\". CSS: h1 font-size: 28px; h2 font-size: 20px; #sidebar width: 200px; height: 150px; border-style: solid; border-color: blue; border-width: 1px."
  },

  {
    id: "a13",
    mode: "advanced",
    type: "code-to-output",
    title: "Styled form with CSS",
    code: `/* CSS */
body {
  font-family: Arial;
}
h1 {
  color: darkblue;
}
.inputLabel {
  color: darkblue;
  font-size: 14px;
}
input {
  border-style: solid;
  border-color: darkblue;
  border-width: 1px;
}`,
    htmlCode: `<h1>Get in Touch</h1>
<form>
  <p class="inputLabel">Your name:</p>
  <p><input type="text" name="name"></p>
  <p class="inputLabel">Your message:</p>
  <p><input type="text" name="message"></p>
  <input type="submit" value="Send">
</form>`,
    hint: "The .inputLabel class applies to the label paragraphs only. The input selector styles all input elements (text boxes and the submit button).",
    outputHTML: `<style>body{font-family:Arial;}h1{color:darkblue;}.inputLabel{color:darkblue;font-size:14px;}input{border-style:solid;border-color:darkblue;border-width:1px;}</style>
<h1>Get in Touch</h1>
<form>
  <p class="inputLabel">Your name:</p>
  <p><input type="text" name="name"></p>
  <p class="inputLabel">Your message:</p>
  <p><input type="text" name="message"></p>
  <input type="submit" value="Send">
</form>`
  },

  {
    id: "a14",
    mode: "advanced",
    type: "output-to-code",
    title: "Menu bar with class highlights",
    description: "Write the HTML and CSS that produces the output shown.",
    outputHTML: `<style>
#navbar {
  background-color: black;
  height: 45px;
  width: 100%;
  font-family: Arial;
}
#navbar a {
  color: white;
  font-size: 16px;
}
.active {
  background-color: orange;
  color: black;
}
</style>
<div id="navbar">
  <a href="index.html" class="active">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<h1>Welcome</h1>`,
    answer: `/* CSS */
#navbar {
  background-color: black;
  height: 45px;
  width: 100%;
  font-family: Arial;
}
#navbar a {
  color: white;
  font-size: 16px;
}
.active {
  background-color: orange;
  color: black;
}

<!-- HTML -->
<div id="navbar">
  <a href="index.html" class="active">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>
<h1>Welcome</h1>`,
    hint: "The div uses id=\"navbar\". The Home link also has class=\"active\". CSS: #navbar height: 45px; width: 100%; #navbar a font-size: 16px; .active background-color: orange; color: black."
  }
];
