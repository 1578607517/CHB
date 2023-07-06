const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer,
        require('postcss-sprites')({
            spritePath: './dist/images', // 雪碧图输出路径
            retina: true, // 支持 retina 屏幕
            verbose: true, // 输出详细信息
          }),
    ]
    
}