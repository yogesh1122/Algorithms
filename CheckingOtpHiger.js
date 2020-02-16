
let res=[];

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
    //res.status(200).send({Mesaage:' otp send to USER Sucessfully',checkOtp});
    //response madhe ha otp send karanar
    res.push(checkOtp);
    return res;
}
let veri=(acc,userip)=>{
    console.log(acc);
    console.log(userip);
    
    

}

let checkingOTP=(otpc,userip)=>
{

if(!otpc){
    otpc=otpVal();
console.log(otpc);
    }
    else
    {
       veri(res[0],userip); 
        
    }




}

checkingOTP(1734);



