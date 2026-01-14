//push pop shift unshift concat join
//shift remove the first element from array and return that element
//join create a new strung by concatinating of all the elements of an array and return a string by a specified separator
//slice splice foreach indexof

let sport = ["cricket","boxing"]
sport.push("tennis","running")
console.log(sport)
console.log(sport.length)
console.log(sport[1].length)
sport.pop()
console.log(sport)
sport.shift()
console.log(sport)
sport.unshift("badminton")
console.log(sport)
let score = [24,56]
let total = score.concat(sport)
console.log(total)
var myteam = sport.join(" ")
console.log(myteam)



let mynum = [1,2,3,4,5]
let mynewnum = mynum.slice(1,5)
console.log(mynewnum)
mynewnum = mynum.indexOf(3)
console.log(mynewnum)
mynewnum = mynum.indexOf(8)
console.log(mynewnum)

