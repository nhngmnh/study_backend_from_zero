const connection=require('../config/db');
const { getAllUsers } = require('../services/CRUDServices');

const  hoiNhuNgocMinh= async(req,res)=>{
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            console.error('❌ Lỗi truy vấn:', err);
            res.status(500).send('Lỗi máy chủ');
            return;
        }

        console.log('✅ Dữ liệu users:', results); 
        res.json(results); // Đảm bảo chỉ gửi dữ liệu khi truy vấn hoàn thành
    });
}
const xulyEjs=(req,res)=>{
    res.render('index.ejs');
}
const getHomePage= async(req,res)=>{
    let results= await getAllUsers();
    return res.render('home.ejs',{listUsers: results});
}
const createUser=async(req,res)=>{
    const {email,name,city}=req.body;

    let[results,fields]= await connection.query('INSERT INTO Users (email, name, city) VALUES (?,?,?)',[email,name,city]);
    console.log(req.body);
    
    res.send('Success');
}
const createForm = (req, res) =>{
    return res.render('createUser.ejs');
}
module.exports = {
    hoiNhuNgocMinh,
    xulyEjs,
    getHomePage,
    createUser,
    createForm,
}