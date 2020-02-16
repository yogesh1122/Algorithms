
function inserSort(arr)
{

  for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
     // return arr;  
    }
    return arr;
}

let data=[12,2,63,89,0,87,23,0,0,1,1,1,1,1,1909];
let insertionSort=inserSort(data);
console.log(insertionSort);


console.log("checking counting numer")

let countingNumbet=countingNumber(data);
//console.log(countingNumbet);


function countingNumber(num)
{
    let keyValue={};
    for(let i=0;i<num.length;i++)
    {
        let key=''+num[i];
        keyValue[key]=0;
    }

    for(let i=0;i<num.length;i++)
    {
        let key=''+num[i];
        keyValue[key]+=1;
    }
    return keyValue;
}


let data1=[1,1,1,2,3, ,4,5,null,58,58,2,];

let removeFallsyValue=data1.filter(Boolean);

console.log(`removing all falcy vale ${removeFallsyValue}`);

let obj1={};

for(let i=0;i<removeFallsyValue.length;i++)
{
    let key=''+removeFallsyValue[i];
    obj1[key]=0
}

for(let i=0;i<removeFallsyValue.length;i++)
{
    let key=removeFallsyValue[i];
    obj1[key]+=1
}
console.log(obj1);


