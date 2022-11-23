'use strict'

const arr = []

// function foo() {
//     let val = document.getElementById('input').value;
//     document.getElementById('result').innerHTML = val
//     // document.getElementById('input').innerHTML = ''
//     for (let i = document.getElementById('input').value; i < arr.length; i++) {

//             console.log(i)
//             arr.push(i)
//             console.log(arr.push(i))
//         }
//         return arr
// }
// foo()

function foo() {
    let buttonInputNumber =  document.querySelector('.buttonInputNumber') 

    function inputSave() {
        let val = document.getElementById('input').value;
        if (Number(val)) {
            document.getElementById('result').innerHTML = val
        } else {
            document.getElementById('result').innerHTML = 'это не число'
        }
        arr.push(val);
        // console.log(arr)
    }

    function resultMassiv() {
        // console.log(arr)
        let start = ''
        for (let i = 0; i <arr.length; i++) {
            start += arr[i] + ' '
            console.log(i)
        }
        // console.log(start)
        document.getElementById('resultMassiv').innerHTML = start
    }


    function clear() {
        let val = document.getElementById('input').value;
        if (val !== '') {
            document.getElementById('input').value = '';
        }
    }
    // function saveinMassiv() {
        
    //     for (let i = document.getElementById('input').value; i < arr.length; i++) {
    //         arr.push(i)
    //         console.log(arr.push(i))
    //     }
    //     return arr
        

    // }
    
    function ready() {
        // console.log(arr)
    }

    buttonInputNumber.addEventListener('click', inputSave)
    buttonInputNumber.addEventListener('click', clear)
    buttonInputNumber.addEventListener('click', resultMassiv)
    
    let buttonReady = document.querySelector('.buttonReady')
    buttonReady.addEventListener('click', ready)
    
    
    // buttonInputNumber.addEventListener('click', saveinMassiv)

    


    
    // let arr = []
    // for (let num of arr) {
    //     arr.push(num)
    // }

    // let sum = 0
    // let numbers = []
    // while (true) {
    //     let value = +prompt('number?', 'num')
    //     if (!value) break
    //     numbers.push(value)
    //     // sum += value
    // }
    // console.log(numbers)
    // alert(sum)
}
foo()

function goo() {
    let button = document.querySelector('.buttonReady')
    
    function color() {
        // button.style.backgroundColor = 'red'
        console.log(arr)
    }

    button.addEventListener('click', color)
    
}
goo()


// function sumInput() {
    // let numbers = []
    
    // // input.onclick = function() {
    // //     while (true) {
    // //         let value = +prompt('number?', 'num')
    // //         if (!value) break
    // //         numbers.push(value)
    // //         console.log(value)
    // //     }    
    // // }

    
    // while (true) {
    //     let value = +prompt('number?', 'num')
    //     if (!value) break
    //     numbers.push(value)
    //     document.querySelector('input').value = value
    //     // sum += value
    // }
    
    // console.log(numbers)

    // // let showMass = [];
    // function sortMass(a, b) {
    //     if (a > b) {
    //     return 1;
    //     }else if (b > a) {
    //     return -1;
    //     }else{
    //     return 0;
    //     }
    // }

    // numbers.sort(sortMass);
    // // for(let i = 0; i < numbers.length; i++){
    // //     showMass = showMass + numbers[i] + ` `;
    // // }

    // // numbers.sort()
    // console.log(numbers)

    // let sum = 0
    // for (let number of numbers) {
    //     sum += number
    // }    
    // console.log(sum) 
   

    // let arr = []

    

    // for(;;) {
        
    //     // let input = document.querySelector('input').value;
    //     // console.log(input)
    //     // if (input === "" || input === null || !isFinite(input)|| input == undefined) break;
    //     if (input == -1)break
    //     arr.push(input);
        
    //     console.log(arr)
    // }
    
    // let sum = 0
    // for (let arr of inputs) {
    //     sum += arr
    // }

    
    
    // document.getElementById('result').innerHTML = arr
    // return arr
    
    


    // let result = document.getElementById('result')
    // result.innerHTML = inputs


// }

// sumInput()

// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("Введите число", 0);
  
//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value)
//       console.log(numbers);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );