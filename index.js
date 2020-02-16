const express= require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true, useNewUrlParser: true})
.then( ()=>{console.log('mongodb connection has been establish...')
})
.catch((e)=>{console.log('error occured',e);

/**check out code 
 * 
 * 
*/

})

const userModel=mongoose.model('',new mongoose.Schema(
    {
        name:{type:String}
    }
))


let port=process.env.port || 5000;
app.listen(port,()=>{
    console.log(`listing on port number ${port}`);
    
})