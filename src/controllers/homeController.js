const connection = require('../config/database.js')
const { getAllUser } = require('../services/CRUDService.js')
let users = []


const getHomepage = async (req,res) =>
{
    const active = true
    let results =  await getAllUser()
    console.log(results)
    console.log("current Route : ",req.originalUrl)
    return res.render('home',{
        listUsers : results,
        currentRoute: req.originalUrl,
       //Can Add custom layouts
        
    })
}

const getCreatePage = (req,res) =>
{
    console.log("current Route : ",req.originalUrl)
    const active = true
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

const getEditPage = (req,res) => {
    console.log("current Route : ",req.originalUrl)
    const active = true
    console.log(req.params)
    return res.render(`edit`,{
        currentRoute: req.originalUrl,
    })
}
    
    

// }

module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getEditPage
}