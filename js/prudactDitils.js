function sendProductInfo() {
    const productName = document.getElementById('title').innerText;
    const price = document.getElementById('price').textContent;
    const size = document.querySelector('input[name="size"]:checked').value;
    const color = document.querySelector('input[name="color"]:checked').value;
    const quantity = document.querySelector('.quantity-input').value;
    const number = document.getElementById('numberInput').value;
    const name = document.getElementById('nameInput').value;
    const location = document.getElementById('locationInput').value;


    const message = `
    Product Name: ${productName} |||
     ${price} |||
    \nSize: ${size}|||
    \nColor: ${color}|||
    \nQuantity: ${quantity} |||
    Name : ${name} |||
    Number: ${number}|||
    \nLocation: ${location}`; ;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '212647262361'; // Your WhatsApp number with country code

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Add event listener to the send button
document.getElementById('send-whatsapp').addEventListener('click', sendProductInfo);
