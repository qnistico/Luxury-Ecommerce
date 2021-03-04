
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

document.querySelector('article').innerHTML = populateTemplate(template, data);

function populateTemplate(template, data) {
    for (i of Object.keys(data)) {
        template = template.replace(`{${i}}`, data[i])
    }
    return template;
}

$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
});

