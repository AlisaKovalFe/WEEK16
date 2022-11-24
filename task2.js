const button = document.querySelector('button')

// Элементы форма
const inputs = document.querySelectorAll('input')
const selections = document.querySelectorAll('select')
const options = document.querySelectorAll('option')
const engine = document.querySelector('#engine')
const result = document.querySelector('#result')

//Options
let marks = document.querySelectorAll('option[name="mark"]')
let models = document.querySelectorAll('option[name="model"]')
// console.log(marks)
// console.log(models)



// Радиокнопки
const radioFuel = document.querySelectorAll('input[name ="fuel"]')
const radioAge = document.querySelectorAll('input[name="age"]')

//Чекбоксы
const owner = document.querySelector('input[name="owner"]')
// console.log(owner)
const unbeaten = document.querySelector('input[name="unbeaten"]')
// console.log(unbeaten)



const startPrice = 1
// let totalPrice 

function calculate() {
    let totalPrice = startPrice 
    document.querySelector('#result').innerHTML = ''

    for (const option of marks) {
        if (option.selected) {
            totalPrice = totalPrice * parseFloat(option.value) 
            // console.log(totalPrice)
        }
    }


    for (const option of models) {
        if (option.selected) {
            totalPrice = totalPrice * parseFloat(option.value) 
        }
    }

    for (let i = 0; i < radioFuel.length; i++) {
        if (radioFuel[i].checked) {
            totalPrice *= parseFloat(radioFuel[i].value) 
        }
        
        // let rad = document.createElement("input")
        // rad.innerText = 'lolo'
        // input.add('rad')
    }
    
    
    let inp = document.createElement('input');
    inp.setAttribute('name', 'fuel')
    inp.setAttribute('type', 'radio')
        lala = document.querySelector('#lala')
        lala.insertAdjacentHTML('afterend', '<input>Пока</input>');
        
        // document.body.append(inp)
        console.log(radioFuel)
        
    

    // for (const radio of radioFuel) {
    //     if (radio.checked) {
    //         totalPrice *= parseFloat(radio.value) 
    //     }
    // }

    for (const radio of radioAge) {
        if (radio.checked) {
        totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    if (owner.checked) {
        totalPrice = totalPrice * parseFloat(owner.value)
    }

    if (unbeaten.checked) {
        totalPrice = totalPrice * parseFloat(unbeaten.value)
    }

    if (engine.value > 0 && engine.value < 1.5) {
        let mult = 0.8
        totalPrice = totalPrice * mult
    } else if (engine.value >= 1.5 && engine.value < 2.5) {
        let mult = 1
        totalPrice = totalPrice * mult
    }  else if (engine.value >= 2.5) {
        let mult = 1.5
        totalPrice = totalPrice * mult
    } else {
        document.querySelector('#engine').value = 'обязательно введите число'
    }
    
    // hide.hidden = true
    result.innerHTML = totalPrice
    console.log(totalPrice)
}

// 

// function modelSelect() {
//     document.querySelector('#hide')
//     hide.hidden = true
//     // document.querySelectorAll('option[name="model"]')
//     // let rad = document.createElement("option")
//     // rad.text = 'lolo'
//     // option.add('rad')
//     // if (marks[0].selected) {
//     //     // let models = document.querySelectorAll('option[name="model"]')
//     //     // let opt1 = document.createElement('option')
//     //     // models.append(opt1)
        
//     //     let arr = []
//     //     let models = ''
//     //     arr.push('lada3', 'lada2')
        
//     //     // for (let i = 0; i < arr.length; i++) {
//     //     //     models = arr

//     //     //     // let opt1 = document.createElement('option')
//     //     //     // models.append(opt1)
//     //     // }
//     //     // console.log(arr)
//     //     console.log(models)
        
//     }


// marks[1].addEventListener('option', modelSelect)
button.addEventListener('click', calculate)


// for (item of inputs ) {
//     // console.log(item)
//     item.addEventListener('input', function() {
//         // console.log('change')
//         calculate()
//     })
// }

// for (item of selections ) {
//     // console.log(item)
//     item.addEventListener('change', function() {
//         console.log('change')
//         calculate()
//     })
// }

