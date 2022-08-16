//1.add event handler with the withdraw button
//2.get the withdraw amount from the withdraw input field
//2.5-also make sure convert string to number using parseFloat
//3. get previous withdraw total
//4.calculate total withdraw amount
//4.5-set total withdraw amount
//5. get the previous balance total
//7.clear the withdraw field

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //step : 2
    const withdrawField = document.getElementById('withdraw-field');
    const newAmountWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newAmountWithdrawString);
   
    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5
    

    //step-7
    withdrawField.value = '';
})