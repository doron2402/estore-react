const Express = require('express');
const PORT = 3002;
var app = new Express();
app
  .use(Express.static(`${__dirname}/../.tmp`))
  .get('/', (req, res) => {
    res.render('../app/index.ejs',{});
  }).listen(PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Listen on ${PORT}`);
  });
