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
//   alert( arr );
// });
// // console.log(arr)
// arr[2]()

// let arr = ['a', 'b', 'c']
// arr.forEach(function(item, index, array) {
//     console.log(item,index,array)
//   });

// const arr = []

// function foo(start) {
//   for (let i = start; i <= 10; i += 2) {
//     arr.push(i)
//   }
//   return arr
// }

// // const foo = () => {
// //   for (let i = 2; i <= 10; i += 2) {
// //     arr.push(i)
// //   }
// //   return arr
// // }

// console.log(foo(2))



// const arr = []

// function foo() {
//     arr.push(1)
//     arr.push(2)
//     arr.push(3)
//     arr.push(1, 2, 3)
// }
// foo()

// console.log(arr)



// пример из codewars
// function isPythagoreanTriple(a, b, c) {
  
//     if( a > c ) {
//       let buf = c;
//       c = a;
//       a = buf;
//     }
//     if( b > c ) {
//       let buf = c;
//       c = b;
//       b = buf;
//     }
     
//     if (a**2 + b**2 == c**2) {
//       return true
//     } else {
//       return false
//     }
//   }
  
//   console.log(isPythagoreanTriple(5,4,3))

  

// let users = [
    //     {id: 1, name: "Вася"},
    //     {id: 2, name: "Петя"},
    //     {id: 3, name: "Маша"}
    //   ];
      
    //   // возвращает массив, состоящий из двух первых пользователей
    //   let someUsers = users.filter(item => item.id < 3);
      
    //   console.log(someUsers); // 2
      
    // const arr = []
    
    // function foo() {
    //     arr.push(1)
    //     arr.push(6)
    //     arr.push(5)
    //     arr.push(1, 2, 3)
    // }
    // foo()
    
    // console.log(arr)