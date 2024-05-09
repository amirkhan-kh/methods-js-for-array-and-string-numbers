//1-masala

//Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// let sortedNumber = ['a','c','d','b'];
// let arr = [];
// for(let i=0; i<sortedNumber.length; i++){
//     arr.push(sortedNumber[i].codePointAt(0))
// }
// let resultN = sortedNumber.sort();
// console.log(resultN);
// console.log(arr);

//2-MASALA

// let num = [5,0,3];
// let arr = [];

// for(let i=0; i<num.length; i++){
//     arr.push(num[0] =('I'),num[1] =('love'),num[2] = ('You') );
// }
// let resultarr =arr.slice(6) + []
// console.log(resultarr);


//3-MASALA
// let str = ["1", "2", "3"];
// console.log(str.join(','));

    
//4-MASALA
// let scrollingText = ("codewars");
// let total = scrollingText.toUpperCase();
// console.log(total);


//5-MASALA

// let str = ['c','f','i','a','g','h','j','b','e','d']
// let total = str.sort();

// console.log(total.join('***'));

//6-MASALA

// let string = "I love arrays they are my favorite";
// let array = string.split(" ");
// console.log(array);


//7-MASALA

// let num = [1,2,5,6,7,9,5,8,6];
// for(let i=1; i<num.length; i++){
//     if(num.length < num[1]) return 'NULL'
// }
// let res = num.slice(0,-1) +' NULL'
// let total = res.slice(1)
// console.log("NULL "+total);

//8-MASALA
// let arr =[1,5,7,'OK',"*",9,];
// let res = arr.includes('+');
// console.log(res);


//9-masala
// function euro2016(team,goal){
//     let winner;
//     if(goal[0]>goal[1]){
//         winner = team[0];
//     } else if(goal[0]<goal[1]){
//         winner = team[1];
//     } else {
//         winner = 'draw'
//     }
//     return "Bugungi o'yinda " + team[0]+" - "+team[1] + ', ' + winner + "  g'olib!!!";
// }
// console.log(euro2016(['Spain','England'],[2,0]));
// euro2016((['Spain','England'],[2,0]))/////

//10-MASALA

// function numbers(input){
//     input = input.sort((a,b) => a - b);
//     let arr =[];
//     for(let i=0; i<input.length; i++){
//         if(input.includes(input[i] +2)){
//             arr.push((input[i] +2, input[i]))
//         }
//     }
//     console.log(arr);
// }
// let res = numbers([1,2,3,4]);
// console.log(res);