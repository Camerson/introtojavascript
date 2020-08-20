function addOne() {
    let amount = parseFloat(document.getElementById('counter').innerText)
    let newamount =  amount + 1;
    document.getElementById('counter').innerText = newamount;
}

function removeOne() {
    let amount = parseFloat(document.getElementById('counter').innerText)
    let newamount =  amount - 1;
    // Prevent the amount from going less than 0
    // If the new amount is less than zero, don't allow the function to replace the value.
    if(newamount < 0){
        return false
    } else {
        document.getElementById('counter').innerHTML = newamount;
    }
}

const turnBodyRed = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
}

