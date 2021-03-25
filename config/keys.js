const mongoose=require('mongoose')
module.exports={}
module.exports={
    MONGOURI:"mongodb://localhost:27017/sajjad?readPreferance=primary&appname=MongoDB%20Compass&ssl=false",
    JWT_SECRET:'sajjadali7',
    SENDGRID_API:process.env.SENDGRID_API,
    EMAIL:'ten3live@gmail.com'
}