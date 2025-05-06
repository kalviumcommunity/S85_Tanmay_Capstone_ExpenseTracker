require('dotenv').config();
const mongoose = require('mongoose');

const db=process.env.DB_URI;

mongoose.connect(db).then(()=>{
    
    console.log('MongDB Connected');
}).catch((error)=>{
    
    console.log('MongDB Not Connected');
}
)
module.exports = mongoose;
