const connection=require('../config/db');

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
const getHomePage=(req,res)=>{
    return res.render('home.ejs');
}
const createUser=(req,res)=>{
    const {email,name,city}=req.body;
    console.log(email,name,city);
    connection.query('INSERT INTO Users (email, name, city) VALUES (?,?,?)', [email, name, city], (err, result) => {
        if (err) {
            console.error('Error', err);
            res.status(500).send('Lỗi máy chủ');
            return;
        }
    })
    res.send('Success');
}
module.exports = {
    hoiNhuNgocMinh,
    xulyEjs,
    getHomePage,
    createUser
 
}