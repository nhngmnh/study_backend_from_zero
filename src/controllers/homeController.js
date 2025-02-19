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
    res.render('index.ejs', {title: 'Hey', message: 'Hello there!' });
}
module.exports = {
    hoiNhuNgocMinh,
    xulyEjs,
 
}