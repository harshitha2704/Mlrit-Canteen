function CopyToTextarea(el) {
  var text = el.textContent;
  var textarea = document.getElementById('cartlist');
  textarea.value = textarea.value + '\n' + text;
}

var submit = document.getElementsByClassName('submit')
function confirm() {

  var txt = document.getElementById('cartlist').value
  if (!txt.length == 0) {
    alert('Your order is confirmed 😆 .')
    document.getElementById("FoodForm").reset();
  } else {
    alert('Your cart is Empty sir.... Please order some 😋 Tasty food...')
  }
}
