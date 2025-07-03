const express = require('express');
const router = express.Router();
// nạp newsController
const siteController = require('../app/controllers/SiteController');
// cấu hình slug
router.use('/search', siteController.search);
//tuyến đường gốc phải để dưới cùng .
router.use('/', siteController.index);

module.exports = router;
