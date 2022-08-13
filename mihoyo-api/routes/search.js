const router = require('koa-router')();

const {
    fetchSearchData,
    fetchSearchPosts,
    fetchHotword,
    fetchSearchSuggest,
} = require('../api')

router.get("/data", async (ctx, next) => {
    const gids = ctx.query.gids;
    const keyword = ctx.query.keyword;
    try {
        const data = await fetchSearchData(gids, keyword)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})

router.get("/posts", async (ctx, next) => {
    const gids = ctx.query.gids;
    const keyword = ctx.query.keyword;
    const last_id = ctx.query.last_id;
    console.log(last_id);
    try {
        const data = await fetchSearchPosts(gids, keyword, last_id)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})

router.get("/hotword", async (ctx, next) => {
    try {
        const data = await fetchHotword(); // rpc 调用
        ctx.body = data
    } catch (e) {
        next(e)
    }
})

router.get("/suggest", async (ctx, next) => {
    const keyword = encodeURI(ctx.query.keyword); // encodeURI 编码
    try {
        const data = await fetchSearchSuggest(keyword);
        ctx.body = data
    } catch (e) {
        next(e)
    }
})
module.exports = router.routes();