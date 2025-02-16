
const hoiNhuNgocMinh=(req,res)=>{
    res.send('Hello, I am Nguyen Gia Linh');
}
const xulyEjs=(req,res)=>{
    res.render('index.ejs', {title: 'Hey', message: 'Hello there!' });
}
module.exports = {
    hoiNhuNgocMinh,
    xulyEjs,
 
}