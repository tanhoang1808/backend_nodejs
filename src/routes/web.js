
const express = require('express')
const router = express.Router()
const {getHomepage,postCreateUser,getCreatePage,getEditPage,postUpdateUser,postDeleteUser,postHandleRemoveUser} = require('../controllers/homeController')
const {getSearchPage} = require('../controllers/searchController.js')

router.get('/',getHomepage)
router.get('/create',getCreatePage)
router.post('/create',postCreateUser)
router.post('/delete/:userId',postDeleteUser)
router.post('/delete',postHandleRemoveUser)


router.get('/edit/:userId',getEditPage)
router.get('/edit',getEditPage);

router.post('/edit',postUpdateUser)

 module.exports = router