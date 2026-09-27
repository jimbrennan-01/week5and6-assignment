const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//*** Routes
app.get("/", function (req, res) {
  res.send(`Response from localhost:${PORTNO}/`);
});

app.get("/search", function (req, res) {
  const keyword = req.query.keyword;
  res.send(`
    <html>
      <body>
        <p>Search results for: ${keyword}</p>
      </body>
    </html>
  `);
});

app.post("/register", function (req, res) {
  const name = req.body.username;
  const email = req.body.email;
  res.send(`
    <html>
      <body>
        <h1>Registration successful for: ${name}</h1>
        <p>Email: ${email}</p>
      </body>
    </html>
  `);
});

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});
