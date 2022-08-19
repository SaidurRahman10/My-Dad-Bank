/*
1. add event handler with the withdraw button
2.get the withdraw amount from the withdraw field
2-5. also make sure to covert the input into a number by using parseFloat

3: get the Previous Withdraw total
4.calculate total withdraw amount
4-5. set the total withdraw amount

5. get the previous Balanced total

6.calculate New balanced total
6-5. set the new balanced total

7.Clear the input field

*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
 

    // step-3

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)


    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    //step-5
    const balancedTotalElement = document.getElementById('balanced-total')
   const previousBalancedTotalString = balancedTotalElement.innerText;
   const previousBalancedTotal = parseFloat(previousBalancedTotalString)

   //step-7
    withdrawField.value = '';

    // step last but here confuse or wot :)
    if(newWithdrawAmount > previousBalancedTotal){
        alert('You dont have enough money to withdraw');
        return;
    }


   //step-6
    const newBalancedTotal = previousBalancedTotal - newWithdrawAmount;
    balancedTotalElement.innerText = newBalancedTotal;






 
   
})