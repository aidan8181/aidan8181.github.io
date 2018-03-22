$( "*", document.body ).click(function( event ) {
  event.stopPropagation();
  var domElement = $( this ).get( 0 );
  console.log("TESTING TESTING TESTING");
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
});
