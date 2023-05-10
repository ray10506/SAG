const path = require('path');

module.exports = {
    plugins: {
        'postcss-preset-env': {
            basePath: path.resolve(__dirname, './images'),
            relative: true,
        }
    }
};