$( document ).ready(function() {
    new WOW().init();
  });

  var template = document.querySelector('template').innerHTML;

var data = {
    firstpar: "Leather Sofa",
  h1: "Luxury Handmade Sofa",
  price: "$32.00",
  content: "I am the best",
  description: "Hand crafted one fiber at a time by superman as well as Jesus.  Each fiber is blessed with the power of God and will grant immortality upon sitting."
}

document.querySelector('article').innerHTML = populateTemplate(template, data);

function populateTemplate(template, data) {
  for (i of Object.keys(data)) {
    template = template.replace(`{${i}}`, data[i])
  }
  return template;
}
