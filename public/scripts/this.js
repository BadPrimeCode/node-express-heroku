$('document').ready(function() {
  console.log('document ready');
  $('#sendInfo').on('click', function() {
    console.log('sendInfo clicked');

    // get user input
    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();

    // assemble object to send to server
    var objectToSend = {
      creature: creatureIn,
      noise: noiseIn
    };

    // ajax POST that sends object to /texter route
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function(data) {
        console.log('got this from server - ' + data);
      } //end ajax success
    }); // end ajax

    // ajax POST to route on our server
    $.ajax({
      type: 'POST',
      url: '/texter',
      success: function(data) {
        console.log('ajax success:', data);
      } //end success
    }); //end ajax
  }) //end sendInfo on click
}); //end document ready
