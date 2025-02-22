const connection = require('../config/db');
const getAllUsers= async ()=>{
    let [results]=await connection.query('select * from Users');
    return results;
}
const getElementById = async (a)=>{
    let[results]=await connection.query('select * from Users where id = ?',[a]);
    return (results && results.length>0) ?results[0]:{};
}
const saveEditUser = async (newEmail, newName, newCity, userId) => {
    await connection.query(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
        [newEmail, newName, newCity, userId]
    );
}
const deleteById = async(userId) =>{
    await connection.query(`delete from Users WHERE id= ?`, userId);
}
module.exports = {
    getAllUsers, getElementById,saveEditUser,deleteById
}