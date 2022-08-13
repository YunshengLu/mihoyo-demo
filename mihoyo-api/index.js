const koa = require("koa");
const app = new koa;
// 跨域中间件
const cors = require("koa-cors");
// 路由中间件引入
const mainRouter = require('./routes/index');
const staticRouter = require('./routes/static');
const searchRouter = require('./routes/search');


const router = require('koa-router')()

// 挂载中间件
app.use(cors());
app.use(mainRouter)
// router.use('/home',mainRouter);
router.use('/static', staticRouter)
router.use('/search', searchRouter)

app.use(router.routes());

app.listen(8080);