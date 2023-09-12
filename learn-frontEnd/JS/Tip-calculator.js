const billAmount = document.getElementById("bill"); //bill-22
const numberOfPeople = document.getElementById("peopl"); //peopl-44
const customTipPercentage = document.getElementById("custom"); //custom-37
const billTipAmount = document.getElementById("tipAmount"); //tipAmount-52
const billTotalPerPerson = document.getElementById("total"); //total-56
const resetButton = document.getElementById("resetBtn"); //resetBtn-58
const buttons = document.querySelectorAll(".tip-btns button");//.tip-btns-28 || button-30

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0, tipvalue.length - 1);

        if (billAmount.value === "") return;
        if (numberOfPeople.value === "") numberOfPeople.value = 1;

        calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipvalue),
            parseInt(numberOfPeople.value)
        )
    })
})

customTipPercentage.addEventListener("blur", (e) => {
    if (billAmount.value === "") {
        resetEveryThing();
        return;
    }
    if (numberOfPeople.value === "") numberOfPeople.value = 1;
    calculateTip(
        parseFloat(billAmount.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
    );
})

function calculateTip(billAmount, tipPercentage, numberOfPeople) {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerPerson.innerHTML = `$${totalAmount}`;

}

resetButton.addEventListener("click", resetEveryThing);

function resetEveryThing(){
    billTipAmount.innerHTML = "$0.00";
    billTotalPerPerson.innerHTML = "$0.00";
    billAmount.value = "";
    numberOfPeople.value = "";
    customTipPercentage.value = "";

}