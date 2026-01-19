for(var j = 2;j<21;j++){
var count = 0
for(var i =0;i<21;i++){
    if(j%i == 0){
        count += 1
    }
}
if(count == 2){
    console.log(j , "prime")
}else{
    console.log(j , "not prime")
}}