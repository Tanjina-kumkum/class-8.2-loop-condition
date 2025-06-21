for(i=0; i<10; i++){
    console.log(i);
    
}
const numbers=[10,11,12,13,14,15,16,17,18,19,20];
var sum=0
for(x=0; x<numbers.length; x++){
    sum= sum + numbers[x]
    console.log(sum);
    
}
let numbers1=[21,22,23,24,25,26,27,28,29,30]
for(g=0;g<numbers1.length;g++){
    if(numbers1[g]%2==0){
        console.log(`${numbers1[g]}`);
        
    }
}
let numbers2=[31,32,33,34,35,36,37,38,39,40];
for(f=0;f<numbers2.length;f++){
    if(numbers2[f]%2!=0){
        console.log(`${numbers2[f]}`);
        
    }
}

let h=0
while(h<10){
    h++
    console.log(h);
    
    h++
}

let numbers3=[11,12,13,14,15]
var sum1=0
var k=0
while(k<numbers3.length){
  sum1= sum1 + numbers3[k]  
  console.log(sum1);
 k=k+1 
}
let num=[22,23,24,25,26]

var j=0
while(j<num.length){
if(num[j]%2==0){
    console.log(`${num[j]}`);
    
}
j++
}

let num1=[31,32,33,34,35,36,37,38,39,40]
var l=0
while(l<num1.length){
if(num1[l]%2!=0){
    console.log(`${num1[l]}`);
    
}


    l++
}
let b=0
do {
   console.log(b);
   b++ 
} while (b<10);
let num2=[11,12,13,14]
var sum2=0
let n=0
do {
    sum2=sum2+num2[n]
    console.log(sum2);
    
    

    n++
} while (n<num2.length);
let num3=[11,12,13,14,15];
let m=0
do {
    if(num3[m]%2==0){
        console.log(`${num3[m]}`);
        
    }
    m++
} while (m<num3.length);
let num4=[11,12,13,14,15]
let p=0
do {
    if(num4[p]%2!=0){
        console.log(`${num4[p]}`);
        
    }

    p++
} while (p<num4.length);

for(i=0;i<10;i++){
    if(i===5){
        break;
    }


console.log(i);

}
for(j=0;j<10;j++){
    if(j==5 || j==7){
        continue;
    }
    console.log(j);
    
}

