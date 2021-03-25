
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
        description: "Wooden table with drawers.  Perfect for dining as well as storage."
    },
    {
        id: 2,
        jsimg: "img/kitchenimg6-removebg-preview.png",
        firstpar: "Bar Stool",
        h1: "Kitchen Bar Stool",
        price: "$149.99",
        description: "Kitchen bar stool.  Small and comfortable."
    },
    {
        id: 3,
        jsimg: "img/kitchensilverware-removebg-preview.png",
        firstpar: "Silverware Set",
        h1: "Silverware Full Set",
        price: "$299.99",
        description: "Premium silver forks and knives."
    },
    {
        id: 4,
        jsimg: "img/kitchenimg4.png",
        firstpar: "Light Fixture",
        h1: "Single Light Fixture",
        price: "$75.00",
        description: "Single light fixture.  Perfect for illuminating cooking surfaces."
    }
    ,
    {
        id: 5,
        jsimg: "img/kitchen7-removebg-preview.png",
        firstpar: "Dish Set",
        h1: "Bowls, Plates and Silverware",
        price: "$149.99",
        description: "5 bowls, 5 plates and 2 sets of forks with spoons."
    }
    ,
    {
        id: 6,
        jsimg: "img/kitchenimg2-removebg-preview.png",
        firstpar: "Handmade Bowls",
        h1: "Set of Handmade Bowls",
        price: "$65.00",
        description: "Two handmade wooden bowls."
    }
    ,
    {
        id: 7,
        jsimg: "img/kitchenimg8-removebg-preview.png",
        firstpar: "Set of Plates",
        h1: "Set of 8 Plates",
        price: "$199.99",
        description: "Set of 8 colorful clay plates."
    }
    ,
    {
        id: 8,
        jsimg: "img/kitchenimg3.png",
        firstpar: "Light Fixture",
        h1: "Single Light Fixture",
        price: "$75.00",
        description: "Single light fixture.  Perfect for illuminating cooking surfaces."
    }
    ,
    {
        id: 9,
        jsimg: "img/livingroom1-removebg-preview.png",
        firstpar: "Black Sofa",
        h1: "Black Long Sofa",
        price: "$2750.00",
        description: "Black leather sofa complete with a long corner segment for relaxing."
    }
    ,
    {
        id: 10,
        jsimg: "img/livingroom2-removebg-preview.png",
        firstpar: "Leather Futon",
        h1: "Premium Leather Futon",
        price: "$1440.00",
        description: "Premium leather futon complete with 2 pillows."
    }
    ,
    {
        id: 11,
        jsimg: "img/couch2-removebg-preview.png",
        firstpar: "Brown Sofa",
        h1: "Brown Long Sofa",
        price: "$2750.00",
        description: "Brown leather sofa complete with a long corner segment for relaxing."
    }
    ,
    {
        id: 12,
        jsimg: "img/couch-removebg-preview.png",
        firstpar: "Leather Couch",
        h1: "White Leather Couch",
        price: "$1999.99",
        description: "White leather couch complete with two pillows."
    }
    ,
    {
        id: 13,
        jsimg: "img/pillow-removebg-preview.png",
        firstpar: "Pillow",
        h1: "Festive Pillow",
        price: "$25.00",
        description: "Handmade colorful pillow for couches or chairs."
    }
    ,
    {
        id: 14,
        jsimg: "img/livingroomchair-removebg-preview.png",
        firstpar: "Small Couch",
        h1: "2 Person Couch",
        price: "$999.99",
        description: "Small 2 person couch complete with 3 pillows."
    }
    ,
    {
        id: 15,
        jsimg: "img/livingroom2-removebg-preview.png",
        firstpar: "Leather Futon",
        h1: "Premium Leather Futon",
        price: "$1440.00",
        description: "Premium leather futon complete with 2 pillows."
    }
    ,
    {
        id: 16,
        jsimg: "img/livingroom1-removebg-preview.png",
        firstpar: "Black Sofa",
        h1: "Black Long Sofa",
        price: "$2750.00",
        description: "Black leather sofa complete with a long corner segment for relaxing."
    }
    ,
    {
        id: 17,
        jsimg: "img/bed1.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1399.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people."
    }
    ,
    {
        id: 18,
        jsimg: "img/bed2.jpg",
        firstpar: "King Size Bed",
        h1: "King Size Bed",
        price: "$2499.99",
        description: "King size bed.  Soft mattress that can fit 2-3 people."
    }
    ,
    {
        id: 19,
        jsimg: "img/bed3.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1999.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people."
    }
    ,
    {
        id: 20,
        jsimg: "img/bed4.jpg",
        firstpar: "Queen Size Bed",
        h1: "Queen Size Bed",
        price: "$1999.99",
        description: "Queen size bed.  Soft mattress that can fit 2 people."
    }
    ,
    {
        id: 21,
        jsimg: "img/bathroom1.jpg",
        firstpar: "Granite Sink",
        h1: "Complete Granite Sink",
        price: "$499.99",
        description: "Ready-made granite sink for small bathroom."
    }
    ,
    {
        id: 22,
        jsimg: "img/bathroom2.jpg",
        firstpar: "Porcelain Sink",
        h1: "Ready-made Porcelain Sink",
        price: "$499.99",
        description: "Ready-made porcelain sink for small bathroom."
    }
    ,
    {
        id: 23,
        jsimg: "img/bathroom3.jpg",
        firstpar: "Towel Rack",
        h1: "Single Towel Rack",
        price: "$49.99",
        description: "Single towel rack for small bathroom."
    }
    ,
    {
        id: 24,
        jsimg: "img/bathroom4.jpg",
        firstpar: "Set of Towels",
        h1: "Set of 3 Towels",
        price: "$49.99",
        description: "Set of 3 towels."
    }
    ,
    {
        id: 25,
        jsimg: "img/flowerpot1-removebg-preview (1).png",
        firstpar: "Flower Pot",
        h1: "Clay Flower Pot",
        price: "$65.00",
        description: "Clay flower pot for flowers or plants."
    }
    ,
    {
        id: 26,
        jsimg: "img/flowerpot2-removebg-preview.png",
        firstpar: "Flower Pot",
        h1: "Clay Flower Pot",
        price: "$65.00",
        description: "Clay flower pot for flowers or plants."
    }
    ,
    {
        id: 27,
        jsimg: "img/flowerpot3-removebg-preview.png",
        firstpar: "Set of 4 Pots",
        h1: "Set of 4 Flower Pots",
        price: "$199.99",
        description: "Set of 4 flower pots for flowers or plants."
    }
    ,
    {
        id: 28,
        jsimg: "img/flowerpot4-removebg-preview (1).png",
        firstpar: "Set of 3 Pots",
        h1: "Set of 3 Flower Pots",
        price: "$149.99",
        description: "Set of 3 flower pots for flowers or plants."
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
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
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
  