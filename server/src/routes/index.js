const newsRouter = require('./news');
const siteRouter = require('./site');
const userRouter = require('./user');
const courseRouter = require('./course');
function route(app) {
  // app.get('/news', (req, res) => {
  //   console.log('this is a Q of news:', req.query.q);
  //   res.render('news');
  // });
  app.use('/courses', courseRouter);
  app.use('/users', userRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
  });
}
module.exports = route;
