
const express = require('express')
const router = express.Router()
const {getHomepage,postCreateUser,getCreatePage,getEditPage} = require('../controllers/homeController')
const {getSearchPage} = require('../controllers/searchController.js')

router.get('/',getHomepage)
router.get('/create',getCreatePage)
router.post('/create',postCreateUser)


router.get('/edit/:userId',getEditPage)




 module.exports = router