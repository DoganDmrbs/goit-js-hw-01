function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

document.write(makeTransaction(5, 3000)+ "<br>"); // "You ordered 5 droids worth 15000 credits!"
document.write(makeTransaction(3, 1000)+ "<br>"); // "You ordered 3 droids worth 3000 credits!"
document.write(makeTransaction(10, 500)+ "<br>"); // "You ordered 10 droids worth 5000 credits!"
