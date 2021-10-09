let NO = 1;
let container;
var tbody
var table



function containerCreation() {
    container = document.createElement('div')

    let row = document.createElement('div')
    row.classList.add('row')

    let col_12 = document.createElement('div')
    col_12.classList.add('col-12')

    let addRowBtn = document.createElement('button')
    addRowBtn.classList.add('mt-3', 'btn', 'btn-outline-success', 'float-end')
    addRowBtn.style.marginRight = '10px'
    addRowBtn.setAttribute('id', 'addRowBtn')
    addRowBtn.setAttribute('onclick', 'addRow()');
    addRowBtn.textContent = 'Add Row'

    // let calculateTotalBtn = document.createElement('button')
    // calculateTotalBtn.classList.add('m-3', 'btn', 'btn-outline-secondary', 'float-start')
    // calculateTotalBtn.style.marginRight = '10px'
    // calculateTotalBtn.setAttribute('id', 'calculateTotalBtn')
    // calculateTotalBtn.setAttribute('onclick', 'calculateTotal()');
    // calculateTotalBtn.textContent = 'Calculate Total'


    let input = document.createElement('input')
    input.setAttribute('disabled', 'true');
    input.classList.add('float-end', 'd-none')
    input.style.height = '38px'
    input.style.marginRight = '177px'
    input.classList.add('text-end', 'shadow')
    input.style.borderColor = 'green'
    input.setAttribute('id', 'total')

    table = document.createElement('table')
    table.classList.add('table', 'table-striped')


    let thead = document.createElement('thead')

    let tr = document.createElement('tr')
    let thArr = ['No', 'Name', 'Price', 'Qty', 'Discount', 'Total', 'Delete']

    for (let a = 0; a < thArr.length; a++) {
        let th = document.createElement('th')
        th.textContent = thArr[a]
        tr.appendChild(th)
    }

    tbody = document.createElement('tbody')

    thead.appendChild(tr)
    table.appendChild(thead)
    table.append(tbody)


    col_12.appendChild(addRowBtn)
    //col_12.appendChild(calculateTotalBtn)
    col_12.appendChild(table)
    col_12.appendChild(input)

    row.appendChild(col_12)

    container.appendChild(row)


    document.querySelector('body').appendChild(container)
}

function addRow() {
    if (checkForm()) {

        let tr = document.createElement('tr')
        tr.setAttribute('id', `${NO}`)
        let tdItem = [NO, `Name${NO}`, `${NO + 20}`]
        for (var i = 0; i <= 6; i++) {
            let td = document.createElement('td')
            let input = document.createElement('input')
            console.log(i)
            switch (i) {
                case 0: td.textContent = `${tdItem[0]}`
                    break
                case 1:
                    let select = document.createElement('select')
                    select.classList.add('form-select')
                    for (let x = 1; x <= 3; x++) {
                        let option = document.createElement('option')
                        option.textContent = `row${NO}_item${x}`
                        option.setAttribute('value', `row${NO}_item${x}`)
                        select.appendChild(option)
                    }
                    td.appendChild(select)
                    break
                case 2:
                    input.setAttribute('type', 'number');
                    input.setAttribute('onchange', 'calculateTotalForOneRow(this)');
                    input.setAttribute('onkeyup', 'calculateTotalForOneRow(this)');
                    input.setAttribute('value', '');
                    input.setAttribute('id', `row${NO}txt${2}`);
                    input.classList.add('text-end')
                    input.style.height = '38px'
                    td.appendChild(input)
                    break
                case 3:
                    input.setAttribute('type', 'number');
                    input.setAttribute('onchange', 'calculateTotalForOneRow(this)');
                    input.setAttribute('onkeyup', 'calculateTotalForOneRow(this)');
                    input.setAttribute('value', '');
                    input.setAttribute('id', `row${NO}txt${3}`);
                    input.style.height = '38px'
                    input.classList.add('text-end')
                    td.appendChild(input)
                    break
                case 4:
                    input.setAttribute('type', 'number');
                    input.setAttribute('onchange', 'calculateTotalForOneRow(this)');
                    input.setAttribute('onkeyup', 'calculateTotalForOneRow(this)');
                    input.setAttribute('value', '');
                    input.setAttribute('id', `row${NO}txt${4}`);
                    input.classList.add('text-end')
                    input.style.height = '38px'
                    td.appendChild(input)
                    break
                case 5: input.setAttribute('type', 'text');
                    input.setAttribute('disabled', 'true');
                    input.setAttribute('id', `row${NO}txt${5}`);
                    input.style.height = '38px'
                    input.classList.add('text-end')
                    td.appendChild(input)
                    break;
                case 6:
                    let button = document.createElement('button')
                    let i = document.createElement('i')
                    i.classList.add('fas', 'fa-trash', 'fa-2x',)
                    button.appendChild(i)
                    button.style.borderColor = 'red'
                    button.classList.add('btn', 'btn-danger')
                    button.setAttribute('onclick', 'removeRow(this)');
                    td.appendChild(button)
                    break
            }
            tr.appendChild(td)
        }
        NO++;
        tbody.appendChild(tr)
        table.appendChild(tbody)
    } else {
        alert('You need to fill all the fields for previous rows')
    }

}

function checkForm() {
    let flag = true
    for (row = 1; row < table.rows.length; row++) {
        let name = table.rows.item(row).cells[1].childNodes[0].value;
        let price = table.rows.item(row).cells[2].childNodes[0].value;
        let qty = table.rows.item(row).cells[3].childNodes[0].value;
        let discount = table.rows.item(row).cells[4].childNodes[0].value;
        if (name.length === 0 || qty.length === 0 || price.length === 0 || discount.length === 0) {
            flag = false
        }
    }
    console.log(flag)
    return flag
}

function calculateTotal() {
    let total = 0;
    console.log('before looping')
    for (row = 1; row < table.rows.length; row++) {
        let subtotal = table.rows.item(row).cells[5].childNodes[0].value;
        if (subtotal.length > 0) {
            total += parseInt(subtotal)
        }
    }
    document.querySelector("#total").classList.remove('d-none')
    document.querySelector("#total").value = total

}

function calculateTotalForOneRow(hkl) {
    //row1txt2
    //row1txt3
    // console.log(hkl.parentNode)
    // console.log(hkl.parentNode.parentNode)
    let row = hkl.parentNode.parentNode.id
    //console.log(document.querySelector(`#row${row}txt${2}`).value)

    let price = document.querySelector(`#row${row}txt${2}`).value
    let qty = document.querySelector(`#row${row}txt${3}`).value
    let discount = document.querySelector(`#row${row}txt${4}`).value

    console.log(price)
    console.log(qty)
    console.log(discount)

    let txt5 = document.querySelector(`#row${row}txt${5}`)
    console.log(txt5)

    if (price.length > 0 && qty.length > 0 && discount.length > 0) {
        txt5.value = price * qty - ((price * qty) * discount / 100)
        calculateTotal()
        console.log(price * qty - ((price * qty) * discount / 100))
    } else {
        txt5.value = ''
    }

}

function removeRow(oButton) {
    //var result = confirm("Are you sure want to delete?");
    var empTab = document.querySelector('.table');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
    calculateTotal()
    // var tbody = document.querySelector('tbody');
    // tbody.removeChild(oButton.parentNode.parentNode); 

}
// document.querySelector('body').onclick = () => {
//     abc()
// }
// function abc() {

//     // console.log(table)
//     // console.log(table.rows.length)
//     let total = 0;
//     console.log('before looping')
//     for (row = 1; row < table.rows.length; row++) {
//         // loop through each cell in a row.
//         // var element = table.rows[row].cells[4].children.value;
//         // console.log(element)
//         let subtotal = table.rows.item(row).cells[4].childNodes[0].value;
//         total += parseInt(subtotal)
//         console.log(total)

//     }

// }