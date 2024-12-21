const pageTitle = document.title;

if (pageTitle === "Homepage") {
  var homeCards = [
    {
      image: "Assets/Images/homepage_images/card_img1.png",
      name: "Blue Sneakers",
      price: "$ 590.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img2.png",
      name: "Athelete navy Shirt",
      price: "$ 650.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img3.png",
      name: "Black sports Watch",
      price: "$ 399.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img4.png",
      name: "White sports trouser",
      price: "$ 540.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img5.png",
      name: "Black socks - sports",
      price: "$ 230.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img6.png",
      name: "Red athelte shirt - Sports",
      price: "$ 490.0",
      cta: "Store Now",
    },
  ];

  for (var i = 0; i < homeCards.length; i++) {
    var singleCard = document.createElement("div");
    singleCard.setAttribute("class", "main_card");
    var cardContent = `<img src="${homeCards[i].image}" class="card">
                          <h6>${homeCards[i].name}</h6>
                          <div class="icon">
                              <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div>
                          <h5 class="price">${homeCards[i].price}</h5>
                          <button class="store_now">${homeCards[i].cta}</button>`;
    singleCard.innerHTML = cardContent;
    document.getElementById("cards_Row").appendChild(singleCard);
  }
} else if (pageTitle === "Products") {
  var products = [
    {
      image: "Assets/Images/productpage_images/product1.png",
      name: "Black Casual T-Shirt - Sports",
      price: "$ 960.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product2.png",
      name: "Black Puma - Sports",
      price: "$ 766.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product3.png",
      name: "White T-Shirt - Sports",
      price: "$ 899.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product4.png",
      name: ">White Comfy Stocks - Sports",
      price: "$ 675.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product5.png",
      name: "Grey Joggars - Sports",
      price: "$ 499.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product6.png",
      name: "White Joggars - Sports",
      price: "$ 650.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product7.png",
      name: "Blue Shoes - Sports",
      price: "$ 670.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product8.png",
      name: "Branded loafers - Sports",
      price: "$ 400.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/productpage_images/product9.png",
      name: "Black Joggars - Sports",
      price: "$ 760.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img1.png",
      name: "Light blue Sneakers - Sports",
      price: "$ 540.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img2.png",
      name: "Blue athelete shirt - Sports",
      price: "$ 860.0",
      cta: "Store Now",
    },
    {
      image: "Assets/Images/homepage_images/card_img3.png",
      name: "Smart watch - Sports",
      price: "$ 590.0",
      cta: "Store Now",
    },
  ];

  var productsDisplay = document.getElementById("products_section");

  for (var i = 0; i < products.length; i++) {
    var productCard = document.createElement("div");
    productCard.setAttribute("class", "product_card");
    var cardContent = `<a href="details.html">
                              <img src="${products[i].image}" alt="" class="product_card_img">
                              <div class="product_card_content">
                                  <div class="content_left">
                                      <h3>${products[i].name}</h3>
                                      <p>${products[i].price}</p>
                                  </div>
                                  <div class="content_right"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
                                      <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
                                  </div>
                              </div>
                              <button class="store_now" id="buy_now" onclick="add('${products[i].title}')">${products[i].cta}</button>
                          </a>`;
    productCard.innerHTML = cardContent;
    productsDisplay.appendChild(productCard);
  }
} 
else if (pageTitle === "Details") {

  /* Image Slider */
  var mainImage = document.getElementById("main_img");
  var smallImages = document.getElementsByClassName("small_img");

  smallImages[0].onclick = function () {
    mainImage.src = smallImages[0].src;
  };

  smallImages[1].onclick = function () {
    mainImage.src = smallImages[1].src;
  };

  smallImages[2].onclick = function () {
    mainImage.src = smallImages[2].src;
  };

  smallImages[3].onclick = function () {
    mainImage.src = smallImages[3].src;
  };
}
