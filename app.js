const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/api', upload.single('foo'), function (req, res) {
    res.end(JSON.stringify({fileSize: req.file.size}, null, 3));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
