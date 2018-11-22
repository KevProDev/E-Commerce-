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


  // Show total cost of cart items ///

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





// Filter product item based off price
(function(){

    const checkthis = document.querySelectorAll(".price-under");

    checkthis.forEach(function(price){
    
      price.addEventListener('change', function(){
        
        // the price amount that was checked
        const checkispress = event.target.dataset.filter;
        console.log(checkispress);
        

        const productItem = document.querySelectorAll(".item-data");
        console.log(productItem);
        

        const productPrice = document.querySelectorAll(".item-price__p");

        if(price.checked){

          productItem.forEach(function(item){

          
            const itemMoney = item.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1].innerText;
            // console.log(itemMoney);

            if( Number(checkispress) < Number(itemMoney) ){
              item.style.display = "none";
              
            }
        
            const itemDisplaying = item.parentElement.parentElement.parentElement.parentElement.parentElement;
            
          })
          
        }
        else {
          console.log("un check");
          productItem.forEach(function(item){

            item.style.display = "inline-block";

          })
          
        }
      })
    });

})();










// Filter product item based off color
(function(){

  var checkbox = document.querySelectorAll(".color-checkbox[name=checkbox]");
  // console.log(checkbox);

  checkbox.forEach(function(eachcheckbox){

    eachcheckbox.addEventListener( 'change', function() {

      //check the filter name 
      const check_value = event.target.dataset.filter;
      // console.log("this is filter value " + check_value);

      //items on the product section
      const items = document.querySelectorAll(".item-data")


      if(eachcheckbox.checked) {
      
        items.forEach(function(item){
          if (check_value == "all"){
            item.style.display = "inline-block";
          }
          else {
            if (item.classList.contains(check_value)){
              item.style.display = "inline-block";
            }
            else{
              item.style.display = "none";
            }
          }
        });

      }
      else{
        items.forEach(function(item){
        
            item.style.display = "inline-block";
          
        });
      }

    });
    


  });
})();




