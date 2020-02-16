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

//this otp API genrate otp and send to user 

//response

//and check on this function

let otpVal=function checkOTP()
{

    let checkOtp=otp();
    console.log(checkOtp);
    //res.status(200).send({Mesaage:' otp send to USER Sucessfully',checkOtp});
    //response madhe ha otp send karanar
    res.push(checkOtp);
    return res;

}
//Declare Global Variables



function sendAndVerfiy(userOTP)
{   
    
    if (!userOTP) {
                  let s=otpVal();
                  //res.push(s)
                  console.log(s+'concate sever otp'); 
                  //console.log(res[0]);
                  
                  //res.push(s);  
                 }
    else{ 

                     console.log('this is verfiyotp function'+userOTP);
                     
                     
                     console.log(res[0]);
                     
                     
                     if(userOTP==res[0])
                     {
                         console.log('user has been log sucessfully');
                         
                     }
                     else
                     {
                         console.log('please try again');
                         
                     }
                 
                          
                }            

                console.log(res[0]);  
}
//console.log(res);


// function  veri(userOTP)
// { 
    
//     console.log('this is verfiyotp function'+userOTP);
    
    
//     console.log(res);
    
    
//     if(userOTP==res[0])
//     {
//         console.log('user has been log sucessfully');
        
//     }
//     else
//     {
//         console.log('please try again');
        
//     }

//  }






sendandVerfiy(2249);


//veri(3218);



//sendUserOtp();  //calling this function

