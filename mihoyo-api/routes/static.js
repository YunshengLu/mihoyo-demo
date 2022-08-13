const router = require('koa-router')();

const {
    fetchEmoticonByPatition,
    fetchDynamicDataByPostId
} = require('../api')

router.get("/emoticon", async (ctx, next) => {
    const gids = ctx.query.gids;
    try {
        const data = await fetchEmoticonByPatition(gids)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})
router.get("/dynamicdata", async (ctx, next) => {
    const  gids = ctx.query.gids;
    const post_id = ctx.query.post_id;
    try {
        const data = await fetchDynamicDataByPostId(gids, post_id)
        ctx.body = data;
    } catch (e) {
        next(e)
    }
})


module.exports = router.routes();