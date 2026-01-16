let a = [10,20,10,20,50,30,40,50]
for (var i = 0;i<a.length;i++){
    if (a[i] == 20){
        console.log(i);
        break;
    }else{
        console.log("-1")
    }
}