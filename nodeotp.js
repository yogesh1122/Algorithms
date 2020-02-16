let express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use((req,res,next)=>{
    res.header('Access-Contro-Allow-Origin','*');
    res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next();
})



let port=process.env.PORT||5000;
app.listen(port,()=>
{


    console.log(`Listing on port ${port} `);
})


app.get('/genrateOTP',(req,res,next)=>
{


    let otp=()=>
{

    let st='0123456789';
    let otp1='';
    for(let i=0;i<4;i++)
    {
         otp1 +=st[Math.floor(Math.random()*10)];

    }
    return otp1   
}

let otpVal=()=>
{

    let checkOtp=otp();
    console.log(checkOtp);
    res.status(200).send({Mesaage:' otp send to USER Sucessfully', checkOtp});
    //response madhe ha otp send karanar
    console.log(checkOtp);    
    //res.push(checkOtp);
    return checkOtp;
}


function sendAndVerfiy(userOTP)
{   
    
    if (!userOTP) {
                  let s=otpVal();
                  //res.push(s)
                  console.log(s+'concate sever otp'); 
                  //console.log(res[0]);
                  
                  //res.push(s);
                  return s;  
                 }



} 

    let val=sendAndVerfiy();
    next();


} )

app.post('/postotp',(req,res)=>
{
    let { otp }=req.body;
    app.use(val);
    console.log( val);
    
    
})




