const connection = require('../config/database.js')
const { getAllUser,getUserById,updateUserById,deleteUserById } = require('../services/CRUDService.js')
let users = []


const getHomepage = async (req,res) =>
{
   
    let results =  await getAllUser()
    
    return res.render('home',{
        listUsers : results,
        currentRoute: req.originalUrl,
       //Can Add custom layouts
        
    })
}

const getCreatePage = (req,res) =>
{
    console.log("current Route : ",req.originalUrl)
    
    return res.render('create',
        {
            currentRoute: req.originalUrl,
        }
    )
}




const postCreateUser = async (req,res) =>
{
    console.log("current Route : ",req.originalUrl)
    let {email,name,city}= req.body
    
    let [results,fields] = await connection.query(`
        insert into Users (email,name,city) VALUES(?,?,?)
        `,
    [email,name,city])
    
    console.log(results)
   res.redirect('/')
}

const getEditPage = async (req,res) => {
    
    let userId = req.params.userId
    
    let user = await getUserById(userId)
    return res.render(`edit`,{
        currentRoute: req.originalUrl,
        user : user
    })
}

const postUpdateUser = async(req,res) => {
    let {userId,email,name,city} = req.body
    results = await updateUserById({userId,email,name,city})
    console.log(results)
    res.redirect('/')
}

const postDeleteUser = async(req,res) => {
    console.log("current Route : ",req.originalUrl)
    let userId = req.params.userId
    console.log("userId delete : ",userId)
    let user = await getUserById(userId)
    res.render('delete',
        {
            currentRoute : req.originalUrl,
            user : user
        }
    )
}

const postHandleRemoveUser = async(req,res) => {
    let userId = req.body.userId
    await deleteUserById(userId)
    res.redirect('/')
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getEditPage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}