const fetch = require('node-fetch')

// 主页 api
const URL_GAMELIST =
    "https://bbs-api.mihoyo.com/apihub/api/getGameList"
const URL_HOME = 
    "https://bbs-api.mihoyo.com/apihub/wapi/webHome?gids={gids}&page={page}&page_size=20"
const URL_HOME_NEW = 
    "https://bbs-api.mihoyo.com/apihub/api/home/new?gids={gids}"
// 静态 表情包 
const URL_EMOTICON =
    "https://bbs-api-static.mihoyo.com/misc/wapi/emoticon_set?gids={gids}"
// 主页 文章点赞等数据
const URL_DYNAMICDATA =
    "https://bbs-api.mihoyo.com/post/wapi/getDynamicData?gids={gids}&post_ids={post_ids}"
// 搜索页 全部tab
const URL_SEARCH_DEFAULT = 
    "https://bbs-api.mihoyo.com/apihub/wapi/search?gids={gids}&keyword={keyword}&size=20&type=0"
// 搜索文章列表
const URL_SEARCH_POSTS =
    "https://bbs-api.mihoyo.com/post/wapi/searchPosts?gids={gids}&keyword={keyword}&size=20&type=2&last_id={last_id}"
// 热门话题 
const URL_SEARCH_HOTWORD =
    "https://s.search.bilibili.com/main/hotword"
const URL_SEARCH_SUGGEST =
    "https://s.search.bilibili.com/main/suggest?term={term}&highlight="
// 测试：
const URL_TEST = 
    // "https://www.taptap.com/webapiv2/gate/v3/rec1?X-UA=V%3D1%26PN%3DWebApp%26LANG%3Dzh_CN%26VN_CODE%3D84%26VN%3D0.1.0%26LOC%3DCN%26PLT%3DiOS%26DS%3DiOS%26UID%3D934c931d-e81a-43c8-9faa-fe1a6b84f9ab"
    "https://www.taptap.com/webapiv2/search/v3/intro-by-device?X-UA=V%3D1%26PN%3DWebApp%26LANG%3Dzh_CN%26VN_CODE%3D84%26VN%3D0.1.0%26LOC%3DCN%26PLT%3DiOS%26DS%3DiOS%26UID%3D934c931d-e81a-43c8-9faa-fe1a6b84f9ab"

const fetchTest = () => {
    return fetch(URL_TEST)
        .then(data=>data)
}

const fetchGameList = () => {
    return fetch(URL_GAMELIST)
        .then(res => res.json())
}

const fetchHomeByPatition = (gids,page) => {
    return fetch(URL_HOME.replace("{gids}", gids).replace("{page}",page))
        .then(res => res.json())
}

const fetchHomeNewByPatition = (gids) => {
    return fetch(URL_HOME_NEW.replace("{gids}", gids))
        .then(res => res.json())
}

const fetchEmoticonByPatition = (gids) => {
    return fetch(URL_EMOTICON.replace("{gids}", gids))
        .then(res => res.json())
}

const fetchDynamicDataByPostId = (gids, post_ids) => {
    return fetch(URL_DYNAMICDATA.replace("{gids}", gids).replace("{post_ids}", post_ids))
        .then(res => res.json())
}

const fetchSearchData = (gids, keyword) => {
    return fetch(
        encodeURI(
        URL_SEARCH_DEFAULT
            .replace("{gids}", gids)
            .replace("{keyword}", keyword)
        )
    )
        .then(res => res.json())
}

const fetchSearchPosts = (gids, keyword, last_id) => {
    return fetch(
        encodeURI(
            URL_SEARCH_POSTS
                .replace("{gids}", gids)
                .replace("{keyword}", keyword)
                .replace("{last_id}", last_id)
                // .replace("{type}", type)
        )
    )
        .then(res => res.json())
}

const fetchSearchSuggest = (keyword) => {
    return fetch(
        // encodeURI(
        URL_SEARCH_SUGGEST
                .replace("{term}", keyword)
            // .replace("{type}", type)
        // )
    )
        .then(res => res.json())
}

const fetchHotword = () => {
    return fetch(URL_SEARCH_HOTWORD)
        .then(res => res.json())
}

module.exports = {
    fetchHomeByPatition,
    fetchHomeNewByPatition,
    fetchEmoticonByPatition,
    fetchDynamicDataByPostId,
    fetchSearchData,
    fetchGameList,
    fetchSearchPosts,
    fetchHotword,
    fetchSearchSuggest,
    fetchTest,
}