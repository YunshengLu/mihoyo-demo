// 一屏 宽 750 css像素 ，一般 375 物理像素 该文件用到的 rem=20px(物理)
var init = function () {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 640) {
        clientWidth = 640;
    }
    var fontSize = (20 / 375) * clientWidth;
    document.documentElement.style.fontSize = fontSize + 'px';
};

init();

window.addEventListener('resize', init);