const express = require('express');

const router = express.Router();
const proxy = require('http-proxy-middleware');

// 代理服务
router.use('/', proxy({
    target: 'https://www.xiteng.com/',
    changeOrigin: true,
}));

module.exports = router;
