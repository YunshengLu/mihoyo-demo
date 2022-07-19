// 防抖
const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

//截取打乱后的数组的前num 位
const getRandomArr = (arr, num) => {
    //打乱数组顺序
    const getArrRandomly = arr => {
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemIndex;
        }
        return arr;
    };

    const tmpArr = getArrRandomly(arr);
    let arrList = [];
    for (let i = 0; i < num; i++) {
        arrList.push(tmpArr[i]);
    }
    return arrList;
};

// 时间戳转日期
const getGMT = function (dateTime) {
    if (dateTime === null) {
        return '';
    }
    let date = new Date(parseInt(dateTime) * 1000);
    let now = new Date().getTime();
    let second = Math.floor((now - date) / 1000);
    let minute = Math.floor(second / 60);
    let hour = Math.floor(minute / 60);
    let day = Math.floor(hour / 24);
    let month = Math.floor(day / 31);
    let year = Math.floor(month / 12);
    let Year = date.getFullYear();
    let Moth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let Day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let Hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let Minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let Sechond = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    if (year > 0) {
        return `${Year}-${Moth}-${Day}`;
    }else if (day > 0) {
        return `${Moth}-${Day}`;
    } else if (hour > 0) {
        return hour + '小时前';
    } else if (minute > 0) {
        return minute + '分钟前';
    } else if (second > 0) {
        return second + '秒前';
    } else {
        return '刚刚';
    }
};

// 根据id 返回路径
const selectGame = (item) => {
    item = {...item}
    switch (item.id) {
        case 1:
            return "benghuai3"
        case 2:
            return "yuanshen"
        case 3:
            return "benghuai2"
        case 4:
            return "weiding"
        case 5:
            return "dabieye"
        case 6:
            return "xingqiong"
        case 8:
            return "juequling"
        default:
            return "dabieye"
    }
}

// 截取二级路由路径，返回游戏id
const SplitPath = (path) => {
    let pathRes = path.split("/")
    let pathName = pathRes[2];
    switch (pathName) {
        case "yuanshen":
            return 2
        case "dabieye":
            return 5
        case "juequling":
            return 8
        case "benghuai3":
            return 1
        case "benghuai2":
            return 3
        case "weiding":
            return 4
        case "xingqiong":
            return 6
        default:
            return 2
    }
}

export {
    debounce,
    getRandomArr,
    getGMT,
    selectGame,
    SplitPath,
}