const express = require('express');
const connectDB = require('./app/config/database');
const { engine } = require('express-handlebars'); // ✅ Import đúng cách
const morgan = require('morgan');
const path = require('path'); // Đảm bảo đã import dòng này
const app = express();
// Kết nối đến MongoDB
connectDB();
const port = 3000;
const route = require('./routes/index');
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Sử dụng middleware để phục vụ file static
app.use(express.urlencoded());
app.use(express.json());
// app.use(morgan('combined'));
// ✅ Cấu hình template engine đúng cú pháp
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/resource/views');
console.log('View folder:', app.get('views'));
//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
