
$(document).ready(function () {
    new WOW().init();
});



var content = [
    {
        id: 1,
        jsimg: "img/kitchensilverware-removebg-preview.png",
        firstpar: "Leather Sofa",
        h1: "Luxury Handmade Sofa",
        price: "$32.00",
        content: "I am the best",
        description: "Hand crafted one fiber at a time by superman as well as Jesus.  Each fiber is blessed with the power of God and will grant immortality upon sitting."
    },
    {
        id: 2,
        jsimg: "img/kitchenimg2-removebg-preview.png",
        firstpar: "John so cool",
        h1: "A thing!",
        price: "$3222222.00",
        content: "I am the best, still!",
        description: "Hand crafted fiber by superman as Jesus.  Each God sitting."
    },
    {
        id: 3,
        jsimg: "img/kitchenimg3.png",
        firstpar: "John so cool",
        h1: "A thing!",
        price: "$3222222.00",
        content: "I am the best, still!",
        description: "Hand crafted fiber by superman as Jesus.  Each God sitting."
    },
    {
        id: 4,
        jsimg: "img/kitchenimg5-removebg-preview.png",
        firstpar: "Leather Sofa",
        h1: "Luxury Handmade Sofa",
        price: "$32.00",
        content: "I am the best",
        description: "Hand crafted one fiber at a time by superman as well as Jesus.  Each fiber is blessed with the power of God and will grant immortality upon sitting."
    }

]




var template = document.querySelector('template').innerHTML;                                                                                                  
var params = new URLSearchParams(window.location.search)
var id = params.get('id') || 1

var data = content.find(x => x.id == id);

document.querySelector('template').innerHTML = populateTemplate(template, data);

function populateTemplate(template, data) {
    for (i of Object.keys(data)) {
        template = template.replace(`{${i}}`, data[i])
    }
    return template;
}



/* get cart total from session on load */
updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {addToCart(this);});
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
     var stringCart;
    //cycles siblings for product info near the add button
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.classList[1]=="price"){
            console.log('price', elem.innerText);
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname : getproductName,
        price : getprice
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */
    
    if(!sessionStorage.getItem('cart')){
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
    else {
        //get existing cart data from storage and convert back into array
       cart = JSON.parse(sessionStorage.getItem('cart'));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage 
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
}
/* Calculate Cart Total */
function updateCartTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    if(sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        console.log(cart);
        //get no of items in cart 
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++){
            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
            //get property value of price
            if (x.length > 0) {
                price = parseFloat(x.price.split('$')[1]);
                productname = x.productname;
            }
            
            //add price to total
            carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
            total += price;
        }
        
    }
    //update total on website HTML
    document.getElementById("total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(pname) {
  var message = pname + " was added to the cart";
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if(!alerts.classList.contains("message")){
     alerts.classList.add("message");
  }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}

