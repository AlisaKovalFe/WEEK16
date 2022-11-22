function input() {
    let num = prompt('Введите число', 'число');
    // document.getElementById('input').value = num;
    let arr = []
    for(;;) {
        arr.push(num)
    }
}


function sumInput() {
    
    // let inputs = document.querySelector('input').value

    // let arr = []

    // // for (let item of inputs) {
    // //     arr.push(item)
        
    // // }

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


}

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