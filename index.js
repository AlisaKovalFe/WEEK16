// let i = 2;
// while (i) { 
//   alert( i )
//   i--;
// } 

// let i = 0;
// while (i < 2) { 
//   alert( i );
//   i++;
// }

// let i = 5;
// while (i < 10) { 
//   alert( i );
//   i++;
//   break
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }

// let i = ['a', 'b', 'c']
// i[1] = 'bla'
// i[3] = 'd'
// console.log(i[1])
// console.log(i)
// console.log(i.length)
// console.log(i.at(-1))
// console.log(i.pop())
// console.log(i)
// i.push('lala')
// console.log(i)
// console.log(i[i.length])

// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям
// for (let fruit of fruits) {
//   alert( fruit );
// }

// let i = [1, 2, 3]
// // i.length = 2
// // console.log(i)
// // delete i[1];
// // console.log(i)
// // console.log(i.length)
// i.splice(1,2)
// console.log(i)


// let i = new Array(5)
// console.log(i)
// console.log(i.length)

// let style = ['Jazz', 'Blus']
// style.push('Rock')
// console.log(style)
// style[Math.floor((style.length - 1 )/ 2)] = 'Classic'
// console.log(style)
// style.shift()
// console.log(style)
// style.unshift('Rep', 'Reggi')
// console.log(style)

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( arr );
// });
// // console.log(arr)
// arr[2]()

let arr = ['a', 'b', 'c']
arr.forEach(function(item, index, array) {
    console.log(item,index,array)
  });