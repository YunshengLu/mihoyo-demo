document.documentElement.style.fontSize = 
    document.documentElement.clientWidth / 18.5 + 'px';

// 横竖屏切换
window.onresize = function() {
    document.documentElement.style.fontSize = 
        document.documentElement.clientWidth / 18.5 + 'px';
}