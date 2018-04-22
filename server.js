var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var content = {
    title:" aakash",
    heading:  "articel-one",
    content:`<q> Examination</q>
<blockquote> This is the definition</blockquote>
<p> This  is a <ins>keyword</ins> done</p>
<p> This  is a <del>keyword</del> done</p>
<p> This is An <kbd>enter</kbd> key</p>
<code>#include"stdio.h"</code>
<p> This is <cite>Important</cite></p>`};


function create_temp(data){
    var content = data.content;
var template = `<html>
<body>
<h1><b>CHAPTER</b> 1</h1> <!--This is th starting-->

<p> Hello everyone </p>
<hr> <!--for line-->
<h2> <u>CHAPTER 1.1</u> </h2>
<p><small> This    is     word
   helping deck</small> </p>
<p> Getting     to <br> know          everyone</p>
<p><u> H<sub>2</sub>O</u></p>

<strong> HEY THERE</strong>
<em><mark> STUDY TODAY</mark> </em>
<p> <abbr title="I am the king">IATK I Will be using IATK all the time</abbr>I Will be IATK using all the time</p>

${content}
</body>
</html>`
return template;
}
app.get('/article-one', function (req, res) {
  res.send(content);
  
});
app.get('/arcticel-two', function (req, res) {
  res.send("Articel TWO");
});
app.get('/articel-three', function (req, res) {
  res.send("ArticLE three");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
