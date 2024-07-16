function handleAddtoCart(productName, productCode) {
  alert(
    "Added to cart:\nProduct Code: " + productCode + "\nProduct: " + productName
  );
}
function handleAddtoWishlist(productName, productCode) {
  alert(
    "Added to wishlist:\nProduct Code: " +
      productCode +
      "\nProduct: " +
      productName
  );
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const container = document.getElementById("product-container");
    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
            <div class="card">
        <div class="cardimage">
          <img
            src="${product.product_image}"
            alt="product_image"
          />
        </div>
        <div class="cardcontent">
          <div class="cardheader">
            <p class="productcode">Product Code: ${product.product_code}</p>
            <p class="productrating">
            ${product.product_rating}
              <img
                src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
                alt=""
              />
            </p>
          </div>
          <div>
            <p class="productname">
              ${product.product_name}
            </p>
          </div>
          <div class="productprice">
            <p class="discountedprice">$${product.discounted_price}</p>
            <p class="originalprice">$${product.original_price}</p>
          </div>
        </div>
        <div class="cardbuttons">
          <button class="atc-btn" onclick="handleAddtoCart('${product.product_name}', '${product.product_code}')">
            <img
              src="https://img.icons8.com/?size=100&id=9720&format=png&color=000000"
              alt=""
            />
            Add to cart
          </button>
          <button class="wl-btn" onclick="handleAddtoWishlist('${product.product_name}', '${product.product_code}')">
            <img
              src="https://img.icons8.com/?size=100&id=19411&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
        `;
      container.appendChild(productDiv);
    });
  })
  .catch((error) => console.error("Error Fetching Data: ", error));
