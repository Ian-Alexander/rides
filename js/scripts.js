$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));
  $('#shortys').show();
  $('#regularRudys').show();
  $('#sasquatch').show();
    if (height <= 3) {
    // $('#shortys').show();
    $("#shortys").addClass("highlight");
  } else if (height > 3 && height <= 5) {
    // $('#regularRudys').show();

  } else {
    // $('#sasquatch').show();
  }
});

// $(document).click(function(list) {
//   var height
//   if (height <= 3) {
//     $('#shortys').hightlight();
//     $('#regularRudys').show();
//     $('#sasquatch').show();
//   }
// });
