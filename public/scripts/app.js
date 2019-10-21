$(document).ready(function() {

  // $(() => {
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/users"
  //   }).done((users) => {
  //     for (user of users.users) {
  //       $("<div>").text(user.name).appendTo($("body"));
  //     }
  //   });
  // });



  // place all products from db onto main page
  const renderProducts = function(products) {
    console.log(products);

    products.forEach(element => {
      return $('.product-container').append(createProductElement(element));
    });
  };
  // Create indervidule products
  const createProductElement = function(product) {
    const $product = $("<article>").addClass("all-products");

    const image_url = product.image_url;
    const item_name = product.item_name;
    const price = product.price;
    const description = product.description;

    const markup = `
    <section class="product-card">
      <div class="image">
      <img src=${image_url} width="100%">
    </div>
      <article>
      <header>
        <div class="title">
        ${item_name}
        </div>
        <div class="price">
          $${price}
        </div>
      </header>
      <div class="description">
        <p>${description}</p>
      </div>
    </article>
    <div>
      <footer>
        <!-- FOOTER -->
        <div>
          <i class="fad fa-heart"></i>
          <iinput class="fad fa-shopping-cart" id="shopping-add" type="submit"></i>
        </div>
      </footer>
    </div>
    </section>
    `;
    $($product).append(markup);
    return $product;
  };

  // AJAX GET /products

  // AJAX GET /tweets
  const loadProducts = function() {
    $.ajax({
      method: "GET",
      url: '/api/foods',
      dataType: 'json'
    })
      .then(function(results) {
        renderProducts(results.products);
      });
  };

  // const loadProduct = function() {
  //   $.ajax({
  //     method: "GET",
  //     url: '/api/foods',
  //     dataType: 'json'
  //   })
  //     .then(function(results) {
  //       renderProducts([results[results.length - 1]]);
  //     });
  // };


  // // AJAX POST /products
  // $('.new-product-form').submit(function(event) {
  //   const data = $(this).serialize();
  //   event.preventDefault();
  //   if (data === "text=" || !$(this[form = "text"]).val().trim()) {
  //     errorMessages('empty');
  //     return false;
  //   } else if ($(this[form = "text"]).val().length > 140) {
  //     errorMessages('full');
  //     return false;
  //   } else {
  //     $.ajax({
  //       method: "POST",
  //       url: '/products',
  //       data: data,
  //     })
  //       .then(() => {
  //         loadProduct();
  //         $(this)[0].reset();
  //         const counter = $(this).find(".counter");
  //         $(counter).html(140);
  //       })
  //       .fail(() => {
  //         errorMessages('broken');
  //         console.log("NOOOOOOOO!");
  //       });
  //   }
  // });

  loadProducts();




});
