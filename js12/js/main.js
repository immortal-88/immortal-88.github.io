
$(document).ready(function() {

  // C A R O U S E L   A C T I V A T I O N
  $('.carousel-hider').carousel();
  
  // T E M P L A T I N G
  var html = $('#intro').html();
  var info = [
    {
      name: "Alexander Gusakov",
      status: "Currently unemployed",
      phone: "099 123 45 67",
      feedback: "I am cool",
      photoPath: "img/photo.png",
      reason: "Want to be famous",
      vk: "https://vk.com/id8150420"
    },
    {
      reason: "To earn money"
    },
    {
      reason: "It is interesting for me"  
    } 
  ];
  var content = tmpl(html, {data:info});
  
  $('body').append(content);
  
});
