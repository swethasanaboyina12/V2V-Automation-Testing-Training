/*n = 21
a = parseInt(n/10)
b = (n%10)*10
console.log(b+a)*/

n = 567
res = 0
while(n>1){
    a  = n%10
    res += a*(10 ** ((String(n).length)-1))
    n = parseInt(n/10)
}
console.log(res)


