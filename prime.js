let a = 7
var count = 0
for(var i =0;i<11;i++){
    if(a%i == 0){
        count += 1
    }
}
if(count == 2){
    console.log("prime")
}else{
    console.log("not prime")
}