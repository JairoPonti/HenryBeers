const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const authRouter = require('./auth');
const categoryRouter = require('./category.js');
const userRouter = require ('./user.js')
const reviewRouter = require ('./review.js')


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/category', categoryRouter);

router.use('/users', userRouter );
router.use('/review', reviewRouter);

module.exports = router;
