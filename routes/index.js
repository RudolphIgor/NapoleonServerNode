 const Router = require('express')
 const router = new Router()
 const categoryRouter = require('./categoryRouter')
 const userRouter = require('./userRouter')

 router.use('/user', userRouter)
 // router.use('/category',)
 // router.use('/brand',)
 // router.use('/image',)
 // router.use('/product',)
 // router.use('/property',)
 // router.use('/value',)

 module.exports = router