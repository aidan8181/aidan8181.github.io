$( "*", document.body ).click(function( event ) {
  event.stopPropagation();
  var domElement = $( this ).get( 0 );
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
});
