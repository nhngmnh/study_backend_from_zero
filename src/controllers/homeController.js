const sequelize=require('../config/db');
const { getAllUsers, getElementById, saveEditUser, deleteById } = require('../services/CRUDServices');

const  hoiNhuNgocMinh= async(req,res)=>{
    sequelize.query('SELECT * FROM Users', (err, results) => {
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
const getUpdateUser = async (req,res)=>{
    console.log(req.params.id);
    let user= await getElementById(req.params.id);
    
    return res.render('updateUser.ejs',{user: user});
}
const postUpdateUser =async(req,res)=>{
    const {id,email,name,city}=req.body;
    await saveEditUser(email,name,city,id);
    //res.send('Success');
    res.redirect('/');
 
}
const deleteUser = async(req,res)=>{
    let id=req.params.id;
    await deleteById(id);
    // res.send('h');
    res.redirect('/');
}
const deleteUserView = async(req,res)=>{
  const id = req.params.id;
  console.log(id);
  let user = await getElementById(id);
    res.render('deleteUser.ejs',{user:user});
}
module.exports = {
    hoiNhuNgocMinh,
    xulyEjs,
    getHomePage,
    createUser,
    createForm,
    getUpdateUser,
    postUpdateUser,
    deleteUser,
    deleteUserView,
 
}