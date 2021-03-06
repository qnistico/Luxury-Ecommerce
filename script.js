
$(document).ready(function () {
    new WOW().init();
});

var content = [
    {
        id: 1,
        jsimg: "img/kitchenimg5-removebg-preview.png",
        firstpar: "Wooden Table",
        h1: "Wooden Table With Drawers",
        price: "$399.99",
        description: "Wooden table with drawers.  Perfect for dining as well as storage.",
        button: '<a href="#" data-name="Wooden&nbsp;Table" data-price="399.99" class="add-to-cart herobutton">Add to cart</a>'
        
    },
    {
        id: 2,
        jsimg: "img/kitchenimg6-removebg-preview.png",
        firstpar: "Bar Stool",
        h1: "Kitchen Bar Stool",
        price: "$149.99",
        description: "Kitchen bar stool.  Small and comfortable.",
        button: '<a href="#" data-name="Bar&nbsp;Stool" data-price="149.99" class="add-to-cart herobutton">Add to cart</a>'
    },
    {
        id: 3,
        jsimg: "img/kitchensilverware-removebg-preview.png",
        firstpar: "Silverware Set",
        h1: "Silverware Full Set",
        price: "$299.99",
        description: "Premium silver forks and knives.",
        button: '<a href="#" data-name="Silverware&nbsp;Full&nbsp;Set" data-price="299.99" class="add-to-cart herobutton">Add to cart</a>'
    },
    {
        id: 4,
        jsimg: "img/kitchenimg4.png",
        firstpar: "Light Fixture",
        h1: "Single Light Fixture",
        price: "$75.00",
        description: "Single light fixture.  Perfect for illuminating cooking surfaces.",
        button: '<a href="#" data-name="Single&nbsp;Light&nbsp;Fixture" data-price="75.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 5,
        jsimg: "img/kitchen7-removebg-preview.png",
        firstpar: "Dish Set",
        h1: "Bowls, Plates and Silverware",
        price: "$149.99",
        description: "5 bowls, 5 plates and 2 sets of forks with spoons.",
        button: '<a href="#" data-name="Dish&nbsp;Set" data-price="149.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 6,
        jsimg: "img/kitchenimg2-removebg-preview.png",
        firstpar: "Handmade Bowls",
        h1: "Set of Handmade Bowls",
        price: "$65.00",
        description: "Two handmade wooden bowls.",
        button: '<a href="#" data-name="Handmade&nbsp;Bowls" data-price="65.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 7,
        jsimg: "img/kitchenimg8-removebg-preview.png",
        firstpar: "Set of Plates",
        h1: "Set of 8 Plates",
        price: "$199.99",
        description: "Set of 8 colorful clay plates.",
        button: '<a href="#" data-name="Set&nbsp;of&nbsp;Plates" data-price="199.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 8,
        jsimg: "img/kitchenimg3.png",
        firstpar: "Light Fixture",
        h1: "Single Light Fixture",
        price: "$75.00",
        description: "Single light fixture.  Perfect for illuminating cooking surfaces.",
        button: '<a href="#" data-name="Single&nbsp;Light&nbsp;Fixture" data-price="75.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 9,
        jsimg: "img/livingroom1-removebg-preview.png",
        firstpar: "Black Sofa",
        h1: "Black Long Sofa",
        price: "$2750.00",
        description: "Black leather sofa complete with a long corner segment for relaxing.",
        button: '<a href="#" data-name="Black&nbsp;Long&nbsp;Sofa" data-price="2750.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 10,
        jsimg: "img/livingroom2-removebg-preview.png",
        firstpar: "Leather Futon",
        h1: "Premium Leather Futon",
        price: "$1440.00",
        description: "Premium leather futon complete with 2 pillows.",
        button: '<a href="#" data-name="Leather&nbsp;Futon" data-price="1440.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 11,
        jsimg: "img/couch2-removebg-preview.png",
        firstpar: "Brown Sofa",
        h1: "Brown Long Sofa",
        price: "$2750.00",
        description: "Brown leather sofa complete with a long corner segment for relaxing.",
        button: '<a href="#" data-name="Brown&nbsp;Long&nbsp;Sofa" data-price="2750.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 12,
        jsimg: "img/couch-removebg-preview.png",
        firstpar: "Leather Couch",
        h1: "White Leather Couch",
        price: "$1999.99",
        description: "White leather couch complete with two pillows.",
        button: '<a href="#" data-name="Leather&nbsp;Couch" data-price="1999.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 13,
        jsimg: "img/pillow-removebg-preview.png",
        firstpar: "Pillow",
        h1: "Festive Pillow",
        price: "$25.00",
        description: "Handmade colorful pillow for couches or chairs.",
        button: '<a href="#" data-name="Festive&nbsp;Pillow" data-price="25.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 14,
        jsimg: "img/livingroomchair-removebg-preview.png",
        firstpar: "Small Couch",
        h1: "2 Person Couch",
        price: "$999.99",
        description: "Small 2 person couch complete with 3 pillows.",
        button: '<a href="#" data-name="Small&nbsp;Couch" data-price="999.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 15,
        jsimg: "img/livingroom2-removebg-preview.png",
        firstpar: "Leather Futon",
        h1: "Premium Leather Futon",
        price: "$1440.00",
        description: "Premium leather futon complete with 2 pillows.",
        button: '<a href="#" data-name="Leather&nbsp;Futon" data-price="1440.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 16,
        jsimg: "img/livingroom1-removebg-preview.png",
        firstpar: "Black Sofa",
        h1: "Black Long Sofa",
        price: "$2750.00",
        description: "Black leather sofa complete with a long corner segment for relaxing.",
        button: '<a href="#" data-name="Black&nbsp;Long&nbsp;Sofa" data-price="2750.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 17,
        jsimg: "img/bed1.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1399.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people.",
        button: '<a href="#" data-name="Queen&nbsp;Size&nbsp;Bed" data-price="1399.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 18,
        jsimg: "img/bed2.jpg",
        firstpar: "King Size Bed",
        h1: "King Size Bed",
        price: "$2499.99",
        description: "King size bed.  Soft mattress that can fit 2-3 people.",
        button: '<a href="#" data-name="King&nbsp;Size&nbsp;Bed" data-price="2499.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 19,
        jsimg: "img/bed3.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1999.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people.",
        button: '<a href="#" data-name="Queen&nbsp;Size&nbsp;Bed" data-price="1999.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 20,
        jsimg: "img/bed4.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1999.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people.",
        button: '<a href="#" data-name="Queen&nbsp;Size&nbsp;Bed" data-price="1999.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 21,
        jsimg: "img/bathroom1.jpg",
        firstpar: "Granite Sink",
        h1: "Complete Granite Sink",
        price: "$499.99",
        description: "Ready-made granite sink for small bathroom.",
        button: '<a href="#" data-name="Granite&nbsp;Sink" data-price="499.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 22,
        jsimg: "img/bathroom2.jpg",
        firstpar: "Porcelain Sink",
        h1: "Ready-made Porcelain Sink",
        price: "$499.99",
        description: "Ready-made porcelain sink for small bathroom.",
        button: '<a href="#" data-name="Porcelain&nbsp;Sink" data-price="499.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 23,
        jsimg: "img/bathroom3.jpg",
        firstpar: "Towel Rack",
        h1: "Single Towel Rack",
        price: "$49.99",
        description: "Single towel rack for small bathroom.",
        button: '<a href="#" data-name="Towel&nbsp;Rack" data-price="49.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 24,
        jsimg: "img/bathroom4.jpg",
        firstpar: "Set of Towels",
        h1: "Set of 3 Towels",
        price: "$49.99",
        description: "Set of 3 towels.",
        button: '<a href="#" data-name="Set&nbsp;of&nbsp;Towels" data-price="49.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 25,
        jsimg: "img/flowerpot1-removebg-preview (1).png",
        firstpar: "Flower Pot",
        h1: "Clay Flower Pot",
        price: "$65.00",
        description: "Clay flower pot for flowers or plants.",
        button: '<a href="#" data-name="Flower&nbsp;Pot" data-price="65.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 26,
        jsimg: "img/flowerpot2-removebg-preview.png",
        firstpar: "Flower Pot",
        h1: "Clay Flower Pot",
        price: "$65.00",
        description: "Clay flower pot for flowers or plants.",
        button: '<a href="#" data-name="Flower&nbsp;Pot" data-price="65.00" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 27,
        jsimg: "img/flowerpot3-removebg-preview.png",
        firstpar: "Set of 4 Pots",
        h1: "Set of 4 Flower Pots",
        price: "$199.99",
        description: "Set of 4 flower pots for flowers or plants.",
        button: '<a href="#" data-name="Set&nbsp;of&nbsp;4&nbsp;Pots" data-price="199.99" class="add-to-cart herobutton">Add to cart</a>'
    }
    ,
    {
        id: 28,
        jsimg: "img/flowerpot4-removebg-preview (1).png",
        firstpar: "Set of 3 Pots",
        h1: "Set of 3 Flower Pots",
        price: "$149.99",
        description: "Set of 3 flower pots for flowers or plants.",
        button: '<a href="#" data-name="Set&nbsp;of&nbsp;3&nbsp;Pots" data-price="149.99" class="add-to-cart herobutton">Add to cart</a>'
    }
]




if ($('template').length > 0) {var template = document.querySelector('template').innerHTML;
var params = new URLSearchParams(window.location.search)
var id = params.get('id') || 1

var data = content.find(x => x.id == id);

document.querySelector('article').innerHTML = populateTemplate(template, data);

function populateTemplate(template, data) {
    for (i of Object.keys(data)) {
        template = template.replace(`{${i}}`, data[i])
    }
    return template;
}
}





/* get cart total from session on load */
// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        console.log(cart[item].name,name);
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";  
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    console.log(output);
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    console.log('.delete-item');
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  
  