const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', (req, res) => {
    res.status(200).render('pages/index.html');
});
app.listen(process.env.PORT || '5050', function () {
    console.log('localhost app listening at port %s', process.env.PORT || '5050');
});