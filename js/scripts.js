$(document).ready(function() {
$('form#rides').submit(function(event) {
  var height = parseInt($('input#height').val());
  var age = parseInt($('input#age').val());

  // $('#shortys').show();
  // $('#regularRudys').show();
  // $('#sasquatch').show();
    if (height <= 3 && age <=10){
    $('#shortys').show();
    // $("#shortys").addClass("highlight");
  } else if (height > 3 && height <= 5 || age > 18) {
    $('#regularRudys').show();

  } else {
    $('#sasquatch').show();
  }
   event.preventDefault();
});
});

// $(document).click(function(list) {
//   var height
//   if (height <= 3) {
//     $('#shortys').hightlight();
//     $('#regularRudys').show();
//     $('#sasquatch').show();
//   }
// });
