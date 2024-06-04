const prudactMedStore = [
    {
        id: 1,
        titel: "nike 23s",
        img: "../img/prudact/new2.png",
        category: "Shoes",
        price: 155,
        oldPrice : 405,
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus voluptas corrupti reiciendis sapiente eligendi dolores modi? Mollitia, dolorum est?",
        numberSize: [40, 42, 43],
        colors : ["pink" , "green" ,"blue"]
    },
    {
        id: 2,
        titel: "adidas 23s",
        img: "../img/prudact/new3.png",
        category: "Sports-Fitness",
        price: 120,
        oldPrice : 405,
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus voluptas corrupti reiciendis sapiente eligendi dolores modi? Mollitia, dolorum est?",
        numberSize: [50, 42, 10],
        colors : ["gray" , "black" ,"yellow"]
    },
    {
        id: 3,
        titel: "coubra 3s",
        img: "../img/prudact/new4.png",
        category: "Men's-Clothing",
        price: 520,
        oldPrice : 405,
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus voluptas corrupti reiciendis sapiente eligendi dolores modi? Mollitia, dolorum est?",
        numberSize: ["sm", "xl", "2xl"],
        colors : ["black" , "white" ,"red"]
    },
    {
        id: 4,
        titel: "airfocs 3s",
        img: "../img/prudact/new4.png",
        category: "Sports-Entertainment",
        price: 520,
        oldPrice : 405,
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus voluptas corrupti reiciendis sapiente eligendi dolores modi? Mollitia, dolorum est?",
        numberSize: ["sm", "xl", "2xl"],
        colors : ["black" , "white" ,"red"]
    },
    {
        id: 4,
        titel: "airfocs 3s",
        img: "../img/prudact/new4.png",
        category: "Sports-Entertainment",
        price: 520,
        oldPrice : 405,
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus voluptas corrupti reiciendis sapiente eligendi dolores modi? Mollitia, dolorum est?",
        numberSize: ["sm", "xl", "2xl"],
        colors : ["black" , "white" ,"red"]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // استخراج معرف المنتج من URL
    function getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    // البحث عن المنتج باستخدام المعرف
    function getProductById(id) {
        return prudactMedStore.find(product => product.id == id);
    }

    // عرض معلومات المنتج
    function displayProductDetails(product) {
        if (product) {
            document.getElementById('title').innerText = product.titel;
            document.getElementById('productImage').src = product.img;
            document.getElementById('price').innerText += product.price + ' $';
            document.getElementById('description').innerText = product.description;
            
            const sizesButtons = product.numberSize.map(size => `<input type="radio" name="size" id="${size}" value="${size}"><label for="${size}">${size}</label>`).join('');
            document.querySelector('.sizes-container').innerHTML += sizesButtons;
            
            const colorsButtons = product.colors.map(color => `<input type="radio" name="color" id="${color}" value="${color}"><label  style="background-color:${color}" for="${color}"></label>`).join('');
            document.querySelector('.colors-container').innerHTML += colorsButtons;
            
            const quantityContainer = document.querySelector('.quantity-container');
quantityContainer.innerHTML = `
    <div class="quantity-controls">
        <button class="decrease-quantity">-</button>
        <input type="text" class="quantity-input" value="1">
        <button class="increase-quantity">+</button>
    </div>
`;

// Add event listeners to the quantity controls
const decreaseButton = quantityContainer.querySelector('.decrease-quantity');
const increaseButton = quantityContainer.querySelector('.increase-quantity');
const quantityInput = quantityContainer.querySelector('.quantity-input');

decreaseButton.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
});

increaseButton.addEventListener('click', () => {
    quantityInput.value++;
});

        } else {
          document.querySelector(".product-container").innerHTML =
            "<p>Product not found</p>";
        }
    }

    const productId = getProductIdFromURL();
    const product = getProductById(productId);
    displayProductDetails(product);
});

window.addEventListener("DOMContentLoaded", () => {
    displayProdactMed(prudactMedStore);
    displayProdactMed2(prudactMedStore);
});

// display prudact header
function displayProdactMed(prudacts) {
    var displayPrudactsMed = prudacts.map((ele) => {
        return `
        <article class="card">
        <div class="card__img">
            <img src=${ele.img} alt="">
        </div>
        <div class="card__name">
            <p>${ele.titel}</p>
        </div>
        <div class="card__precis">
            
            <div>
                <span class="card__preci card__preci--before">$ ${ele.oldPrice}</span>
                <span class="card__preci card__preci--now">$${ele.price}</span>
            </div>
            <a href="prudactPage.html?id=${ele.id}" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
        </div>
    </article>
        `
    }).join("");
    document.getElementById("all-prudact").innerHTML = displayPrudactsMed;
}

// display prudact body gg


// run filter category
filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const Catugory = e.currentTarget.dataset.id;
        const menuCatugory = prudactMedStore.filter(function (menuItem) {
            return menuItem.category === Catugory;
        });
        if (Catugory === 'all') {
            displayProdactMed2(prudactMedStore);
        } else {
            displayProdactMed2(menuCatugory);
        }
    });
});





