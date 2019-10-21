
//Shopping cart functions

$(document).ready(function() {
  const arr = [7.50,4,1.25]

  //Order total listener

  //Calculate Order Helper
  const cartTotal = $('#cart-total')

  const calcTotal = function(array) {
    let total = 0;
    for (let ele in array) {
      total += array[ele];
    }
    return total;
  }
  cartTotal.text(calcTotal(arr));
});