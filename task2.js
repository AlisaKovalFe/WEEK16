// Элементы страницы
const button = document.querySelector('button')

// Элементы форма
const inputs = document.querySelectorAll('input')
const selections = document.querySelectorAll('select')
const options = document.querySelectorAll('option')
const engine = document.querySelector('#engine')
const result = document.querySelector('#result')

//Options
let marks = document.querySelectorAll('option[name="mark"]') // пусть останется, я в цикле обратилась через айди марк
let models = document.querySelectorAll('option[name="model"]') // их как бы не существует при закоммитеных тегах в html
let modelsSelect = document.querySelector('#sel')
let markSel = document.querySelector('#mark')

// Радиокнопки
const radioFuel = document.querySelectorAll('input[name ="fuel"]')
const radioAge = document.querySelectorAll('input[name="age"]')

//Чекбоксы
const owner = document.querySelector('input[name="owner"]')
const unbeaten = document.querySelector('input[name="unbeaten"]')


const startPrice = 1 

function calculate() {
    let totalPrice = startPrice 
    document.querySelector('#result').innerHTML = ''

    for (const option of markSel) {
        if (option.selected) {
            totalPrice = totalPrice * parseFloat(option.value) 
        }
    }

    for (const option of modelsSelect) {
        if (option.selected) {
            totalPrice = totalPrice * parseFloat(option.value) 
        }
    }

    for (let i = 0; i < radioFuel.length; i++) {
        if (radioFuel[i].checked) {
            totalPrice *= parseFloat(radioFuel[i].value) 
        }        
    }

    // другой спопосб прохождения по массиву оставила для себя
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
        document.querySelector('#engine').value = ''
    }
    
    
    // для себя эксперимет оставила
    // let inputFuel = document.createElement('input');
    // inputFuel.setAttribute('name', 'fuel')
    // inputFuel.setAttribute('type', 'radio')
    // // inp.innerHTMl = "hi" - не работает, в инпут нет иннер
    // wrapFuel = document.querySelector('#wrapFuel') // через id все понял
    // // lala.insertAdjacentHTML('afterend', '<input>Пока</input>');
    // wrapFuel.append(inputFuel)
    

    // оставила для себя и скрыла послденюю модель бмв
    // hide.hidden = true


    // if (document.querySelector('#sel').options.selectedIndex == 1)

    // let selectedOption = sel.options[sel.selectedIndex]
    // console.log(selectedOption)
    // console.log(selectedOption.value)
    // console.log(selectedOption.text)


    const formatter = new Intl.NumberFormat('ru');
    result.innerText = formatter.format(totalPrice)
    console.log(totalPrice)
}

function optionSelect() {
    
    // for (let i = 0; i < sel.length; i++ ) {
    //     sel.remove(sel[i])
    //     console.log(i)
    // }
    
        sel.remove(sel[0])
        sel.remove(sel[1])
        sel.remove(sel[2])
    if (marks[0].selected) {
        let newOptionMers1 = new Option ('Lada1', '0.5')
        sel.append(newOptionMers1)
        let newOptionMers2 = new Option ('Lada2', '0.8')
        sel.append(newOptionMers2)
    }
    if (marks[1].selected) {
        let newOptionMers1 = new Option ('Mercedes1', '1.5')
        sel.append(newOptionMers1)
        let newOptionMers2 = new Option ('Mercedes2', '1.8')
        sel.append(newOptionMers2)
        let newOptionMers3 = new Option ('Mercedes3', '2')
        sel.append(newOptionMers3)
    }

    if (marks[2].selected) {
        let newOptionMers1 = new Option ('Volvo1', '1')
        sel.append(newOptionMers1)
        let newOptionMers2 = new Option ('Volvo2', '1.2')
        sel.append(newOptionMers2)
    }

    if (marks[3].selected) {
        let newOptionMers1 = new Option ('BMW1', '1.5')
        sel.append(newOptionMers1)
        let newOptionMers2 = new Option ('BMW2', '2')
        sel.append(newOptionMers2)
    }   
}

modelsSelect.addEventListener('focus', optionSelect)
button.addEventListener('click', calculate)


