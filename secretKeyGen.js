let secretKey;
function generateSecretKey(){
secretKey=Math.round(Math.random()*1000000).toString();
//console.log(secretKey);
if(secretKey.length==6){
    return secretKey;
} 
else{ return generateSecretKey();}
}
document.getElementById("secret-key-generator").addEventListener('click',function(){
secretKey=generateSecretKey();
console.log(secretKey);
document.getElementById("secret-key-space").innerText=secretKey;
})
let num='';
function show(a){
    if(a=='c')num='';
    else if (a=='x'){
        num=num.slice(0,num.length-1);
    }
    else num=num+a;
    console.log(num);
    console.log('length:'+ num.length);
document.getElementById("input-pin").innerText=num;
}
function verify(){
    if(secretKey==num) document.getElementById('message').innerHTML='<p>&#9989; Success!!</p>';
    else document.getElementById('message').innerHTML='<p>&#10060; Pin not matched !!</p>'

}

