// 时间戳转日期
export const getGMT = function (dateTime: string) {
    if (dateTime === null) {
        return '';
    }
    let date = new Date(parseInt(dateTime) * 1000);
    let now = new Date().getTime();
    let second = Math.floor((now - date.getTime()) / 1000);
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
    } else if (day > 0) {
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

/**
 * @func 实现小于十万直接显示,大于十万保留一位小数,小数位为0不显示
 * @prames num
 * @return string
 */

export const NumberFormatOne = (number: number): string => {
    if (number < 100000) {
        return String(number);
    } else {
        // 千位 进位后为 10 ，或者舍入后为 0 ，只显示万位
        if (Math.round((number % 10000) / 1000) == 0 || Math.round((number % 10000) / 1000) == 10) {
            return Math.round(number / 10000) + '万';
        } else {
            return (number / 10000).toFixed(1) + '万';
        }
    }
};

/**
 * @func 实现小于一万直接显示，大于一万保留万整数位
 * @prames num
 * @return string
 */

export const NumberFormat = (number: number): string => {
    if (number < 10000) {
        return String(number);
    } else {
        return Math.round(number / 10000) + '万';
    }
};

/**
 * @func 实现打乱数组arr,获取count个数据
 * @prames arr number
 * @return arr
 */
export const getRandomArrayElements = (arr: any[], count: number) => {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp;
    let index;
    // Fisher-Yates洗牌算法 打乱min后的数据再输出
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};

/**
 * @func 搜索历史记录功能
 * @param localStorage内部数据
 * @return localStorage内部数据
 */

export const addSearchHistory = (value: string) => {
    const date = new Date();
    const search_history = {
        value: value,
        isHistory: 1,
        timestamp: date.getTime(),
    };
    const oldData = window.localStorage.getItem('search_history')
        ? window.localStorage.getItem('search_history')
        : '[]';
    const newData = JSON.parse(oldData || '[]');
    const res = newData.filter((item: { value: string }) => item.value !== search_history.value);
    window.localStorage.setItem('search_history', JSON.stringify([search_history, ...res]));
};
export const getSearchHistory = () => {
    return JSON.parse(window.localStorage.getItem('search_history') || '');
};
export const removeSearchHistory = () => {
    window.localStorage.removeItem('search_history');
};

/**
 * @func 防抖功能
 * @param
 * @return
 */

export const debounce = (func: any, delay: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return function (this:any,...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

/**
 * @func 搜索字符变色功能
 * @param kw 传入的关键字，str 需要检索关键字的字符串
 * @return
 */
// 传入要匹配的关键字和要被更改的字符串,
export const highlight = (kw: string, str: string) => {
    // 添加正则
    const reg = new RegExp(kw, 'ig'); // ig 是所有的意思 而非在发现第一个匹配项时立即停止

    // 使用replace方法替换元素产生高亮
    return str.replace(reg, function (match: string) {
        return `<span style="color:skyblue">${match}</span>`;
    });
};
