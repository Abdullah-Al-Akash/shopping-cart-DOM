//Function for Increment and Decrement:
function updateCaseNumber(product, price, isIncrease) {
        const caseCount = document.getElementById(product + '-count');
        let caseCountNumber = parseInt(caseCount.value);

        if (isIncrease == true) {
                caseCountNumber = caseCountNumber + 1;
        }
        else if (caseCountNumber > 0) {
                caseCountNumber = caseCountNumber - 1;
        }
        caseCount.value = caseCountNumber;

        const caseAmount = document.getElementById(product + '-amount');
        caseAmount.innerText = caseCountNumber * price;
        calculateTotal()

        //Checkout Button Active:
        const totalAmountText = document.getElementById('total-amount').innerText;
        const totalAmount = parseFloat(totalAmountText);
        if (totalAmount == 0) {
                document.getElementById('checkout').setAttribute('disabled', true);
        }
        else {
                document.getElementById('checkout').removeAttribute('disabled');
        }
}

// Set Increment Case:
document.getElementById("case-plus").addEventListener('click', function () {
        updateCaseNumber('case', 59, true);
})
document.getElementById("case-count").addEventListener('change', function () {
        updateCaseNumber('case', 59, true);
})

//Set Decrement Case:
document.getElementById('case-minus').addEventListener('click', function () {
        updateCaseNumber('case', 59, false);
})
document.getElementById('case-count').addEventListener('change', function () {
        updateCaseNumber('case', 59, false);
})

//Set Increment Phone:
document.getElementById("phone-plus").addEventListener('click', function () {
        updateCaseNumber('phone', 1219, true);
})
document.getElementById("phone-count").addEventListener('change', function () {
        updateCaseNumber('phone', 1219, true);
})
//Set Decrement Phone:
document.getElementById("phone-minus").addEventListener('click', function () {
        updateCaseNumber('phone', 1219, false);
})
document.getElementById("phone-count").addEventListener('change', function () {
        updateCaseNumber('phone', 1219, false);
})

//Product Equation:
function updateProductDetails(product) {
        const productInput = document.getElementById(product + "-count");
        const productCount = parseInt(productInput.value);
        return productCount;
}

//Calculate Total Price:
function calculateTotal() {
        const phoneAmount = updateProductDetails('phone') * 1219;
        const caseAmount = updateProductDetails('case') * 59;
        const subTotal = phoneAmount + caseAmount;
        const tax = subTotal / 100;
        const totalAmount = subTotal + tax;
        //Update Sub Total Amount:
        document.getElementById('sub-total').innerText = subTotal;
        //update Tax Amount:
        document.getElementById('tax').innerText = tax;
        //Update Total Amount:
        document.getElementById('total-amount').innerText = totalAmount;

}

