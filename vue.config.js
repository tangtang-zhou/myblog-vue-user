module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        open: true,
        host: 'localhost',
        port: '8081',
        proxy: {
            '/api': {
                target: 'http://localhost:8888', // 要请求的地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
