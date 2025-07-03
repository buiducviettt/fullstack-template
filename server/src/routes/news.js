const express = require('express');
const router = express.Router();
// nạp newsController
const newsController = require('../app/controllers/NewsController');
// cấu hình slug
router.use('/:slug', newsController.show);
//tuyến đường gốc phải để dưới cùng .
router.use('/', newsController.index);

module.exports = router;
