

let str='Hi my name is yogesh ok dude okkkkkkkkk';

let spt=str.split(' ');

let st=spt.sort(function(a,b){ return b.length-a.length})

for(let i=0;i<st.length;i++)
{
    console.log(`${st[i]} and lenght ${st[i].length}`);
    
}
