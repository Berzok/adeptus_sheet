// vue.config.js
module.exports = {
    devServer: {
        port: 3000
    },
    pages: {
        index: {
            entry: [
                './src/main.ts'
            ]
        }
    }
}