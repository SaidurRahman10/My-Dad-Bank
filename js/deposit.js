//step - 1: add Event listener to the deposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2: get the deposit amount from the deposit input field
  //For input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");

  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString)

  //step-3: get the current deposit total
  //for non-input(element other than input,textarea) use innerText to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)

  
  //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;



  //step-5: get balanced current total
  const balancedTotalElement  =document.getElementById("balanced-total");
  const previousBalancedTotalElementString = balancedTotalElement.innerText;
 const previousBalancedTotalElement = parseFloat(previousBalancedTotalElementString)



//  step-6: calculate current total balanced
 const currentBalancedTotal = previousBalancedTotalElement+newDepositAmount;
 //set the balanced total element
 balancedTotalElement.innerText = currentBalancedTotal;


  //step-7: Clear the Deposit field
  depositField.value = "";
});
