const sequelize = require('../config/db');
const getAllUsers= async ()=>{
    let [results]=await sequelize.query('select * from Users');
    return results;
}
const getElementById = async (a)=>{
    let[results]=await sequelize.query('select * from Users where id = ?',{
        replacements: [a], // Truyền tham số qua mảng
        type: sequelize.QueryTypes.SELECT,
    });
    return (results && results.length>0) ?results[0]:{};
}
const saveEditUser = async (newEmail, newName, newCity, userId) => {
    await sequelize.query(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
        [newEmail, newName, newCity, userId]
    );
}
const deleteById = async(userId) =>{
    await sequelize.query(`delete from Users WHERE id= ?`, userId);
}
module.exports = {
    getAllUsers, getElementById,saveEditUser,deleteById
}