const Router = require('express')
const router = new Router()

router.post('/')
router.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

module.exports = router