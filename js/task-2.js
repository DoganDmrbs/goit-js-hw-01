function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
document.write(getShippingMessage("Australia", 120, 50)+ "<br>"); // "Shipping to Australia will cost 170 credits"
document.write(getShippingMessage("Germany", 80, 20)+ "<br>"); // "Shipping to Germany will cost 100 credits"
document.write(getShippingMessage("Sweden", 100, 20)+ "<br>"); // "Shipping to Sweden will cost 120 credits"
