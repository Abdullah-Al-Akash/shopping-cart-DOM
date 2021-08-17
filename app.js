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
