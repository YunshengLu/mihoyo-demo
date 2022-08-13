const router = require('koa-router')();

const {
    fetchHomeByPatition,
    fetchHomeNewByPatition,
    fetchGameList,
    fetchTest,
} = require('../api')

router.get("/gamelist", async (ctx, next) => {
    try {
        const data = await fetchGameList()
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})

router.get("/home", async (ctx, next) => {
    const gids = ctx.query.gids;
    const page = ctx.query.page;
    try {
        const data = await fetchHomeByPatition(gids,page)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})

router.get("/homenew", async (ctx, next) => {
    const gids = ctx.query.gids;
    try {
        const data = await fetchHomeNewByPatition(gids)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})

router.get("/test", async (ctx, next) => {
    try {
        const data = await fetchTest()
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})


module.exports = router.routes();