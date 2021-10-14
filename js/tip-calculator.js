const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  let result;

  // Assign form values
  

  // 2a. Create `service` variable to accept value from select menu
  const service = form.service.value
  
  // 2b. Refactor `tipPercentage` and `tipRate` based on `service` using conditional statements (if/else/etc)
  
    if (service === '0') {
    result = Number(0)/100

  } else if (service === '12') {
    // Bad service -> 12%/0.12
    result = Number(12)/100
  
  } else if (service === '18') {
    // Adequate service -> 18%/0.18
    result = Number(18)/100

  } else if (service === '23') {
    // Amazing service -> 23%/0.23
    result = Number(23)/100
  
  } else {
    result = "You didn't tip, did you?"

  }

  
  
  // Calculate tip and tax amounts

  const billTotal = Number(form.total.value);
  const tipPercentage = Number(form.service.value);

  const tipRate = tipPercentage / 100;
  const tipAmount = billTotal * tipRate;
  const paymentTotal = billTotal + tipAmount;
  
 // console.log(billTotal, tipPercentage, tipRate, paymentTotal);





  // Output results  
  form.payment.value = `Tip for $${billTotal} at ${tipPercentage}% tip for a total payment of $${paymentTotal.toFixed(2)}`;
  
  //result;


  // console.log(service)
}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);