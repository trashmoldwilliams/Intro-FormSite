$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var person1Input = $("input#person1").val();
    var timeInput = $("input#time").val();
    var dateInput = $("input#date").val();

    $('.person1').text(person1Input);
    $('.time').text(timeInput);
    $('.date').text(dateInput);

    $('#story').show();

    event.preventDefault();
  });
});
