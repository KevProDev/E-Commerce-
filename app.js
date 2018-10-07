// Show Cart

(function(){
  // grabbing the cart logo 
  const cartIcon = document.querySelector('.header__cart');
  //grabbing the the car-info
  const cartInfo = document.querySelector('.cart-info');

  // console.log(cartInfo);
  
  // add a click event on cart logo to open thr cartinfo
  cartIcon.addEventListener('click', function(){
    event.preventDefault()
    cartInfo.classList.toggle('show-cart-info');
  })

})();

// add items to the cart

(function(){
  const itemBtn = document.querySelectorAll('.item-button-a');

  itemBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
      event.preventDefault();

      let fullPath = event.target.parentElement.parentElement.firstElementChild.src;

      // console.log(fullPath);  

      let posOfImg = fullPath.indexOf('img') + 3;

      let partPosOfImg = fullPath.slice(posOfImg);

      // console.log(partPosOfImg);
      

      const item = {};
      item.img = `img${partPosOfImg}`;
      let name = event.target.parentElement.nextElementSibling.firstElementChild.innerText;
      item.name = name;
      let price = event.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerText;
      let finalPrice = price.slice(1).trim();
      item.finalPrice = finalPrice;

      // console.log(item);


      cartItem = document.createElement("div");
      cartItem.classList.add("cart-info-items", "clearfix");
      cartItem.innerHTML = `
          <div class="cart--item-img"><img src="${item.img}" alt=""></div>
          <div class="cart--item-title">${item.name}</div>
          <div class="cart--item-price">${item.finalPrice}</div>
      `

      const cart = document.querySelector(".cart-info-items-container");
      const total = document.querySelector(".check-out-info");

      cart.appendChild(cartItem);
     

      showTotal();
      
      
      
      

    });
  });


  // Another fuction ///

  function showTotal(){
    console.log("funcition is working");

    const total = [];
    const items = document.querySelectorAll(".cart--item-price");
    console.log(items);
    items.forEach(function(item){
      total.push(parseFloat(item.textContent));
    });
    console.log(total);
    
    const preTotalPrice = total.reduce(function(total,everyitem){
      total += everyitem;
      return total;
    },0)

    const finalTotalPrice = preTotalPrice.toFixed(2);
    
    console.log(finalTotalPrice);

    document.querySelector('.price-span').textContent = finalTotalPrice;
  }
})();

// function userCreator(name, score){
//   let newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// };

// let userFunctionStore = {
//   increment: function(){
//     this.score++
//   },
//   login: function(){console.log("Youre Logged In...");}
// };

// let user1 = userCreator("Kevin", 7);
// let user2 = userCreator("Lichine", 5);
// user1.increment();
// console.log(user1);



