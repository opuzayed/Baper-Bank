//1.add event handler with the withdraw button
//2.get the withdraw amount from the withdraw input field
//2.5-also make sure convert string to number using parseFloat
//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step : 2
    const withdrawField = document.getElementById('withdraw-field');
    const newAmountWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newAmountWithdrawString);
    console.log(newWithdrawAmount);
})