class Bill {
  constructor(value, quantity, url) {
    this.value = value
    this.quantity = quantity
    this.image = new Image()
    this.image.src = url
  }
}


function giveMoney () {
  var div = 0
  var billsDelivered = 0
  var money = parseInt(document.getElementById('money').value)

  for(var bill of funds) {
    if(money > 0) {
      div = Math.floor(money / bill.value)
      if(div > bill.quantity) {
        billsDelivered = bill.quantity
      } else {
        billsDelivered = div
      }
      delivered.push(new Bill(bill.value, billsDelivered, bill.image.src))
      money = money - (bill.value * billsDelivered)
    }
  }

  if(money > 0) {
    message.innerHTML = "I can't give you that amount"
  } else {
    for (var bill of delivered) {
      if(bill.quantity > 0) {
        message.innerHTML += bill.quantity + ' bills of $' + bill.value + '<br>'
        document.body.appendChild(bill.image)
      }
    }
  }
}


var funds = []
var delivered = []

//Adding bills to the machine
funds.push(new Bill(100, 5, 'https://i.imgur.com/QWWnbOk.png'))
funds.push(new Bill(50, 5, 'https://i.imgur.com/8TqMZTr.png'))
funds.push(new Bill(20, 5, 'https://i.imgur.com/vkNw7Wc.png'))
funds.push(new Bill(10, 5, 'https://i.imgur.com/OZSrTax.png'))
funds.push(new Bill(5, 5, 'https://i.imgur.com/Z9C1NNw.png'))
funds.push(new Bill(1, 5, 'https://i.imgur.com/qVpa8tg.png'))

var message = document.getElementById('message')
document.getElementById('withdraw').addEventListener("click", giveMoney)








