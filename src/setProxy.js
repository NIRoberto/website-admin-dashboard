const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://dashboard-r-api.herokuapp.com',
      changeOrigin: true,
    }),
  );
};
