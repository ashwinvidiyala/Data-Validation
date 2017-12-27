$(document).ready(function() {
  var dateFormat = "mm/dd/yy",
     from = $( "#from" )
       .datepicker({
         defaultDate: "+1w",
         changeMonth: true,
         numberOfMonths: 1
       })
       .on( "change", function() {
         to.datepicker( "option", "minDate", getDate( this ) );
       }),
     to = $( "#to" ).datepicker({
       defaultDate: "+1w",
       changeMonth: true,
       numberOfMonths: 1
     })
     .on( "change", function() {
       from.datepicker( "option", "maxDate", getDate( this ) );
     });

   function getDate( element ) {
     var date;
     try {
       date = $.datepicker.parseDate( dateFormat, element.value );
     } catch( error ) {
       date = null;
     }

     return date;
   }

   $('button').click(function() {
     if ($('#name').val() == '') {
       $('.container').append("<p class='red'> Your name can't be blank!</p>");
       $('button').css('background-color', 'red');
     } else {
       alert('Thanks ' + $('#name').val() + '! Your cruise leaves on ' +
       $('#from').val() + ' and returns on ' + $('#to').val() + '!');
     }
   })

});
