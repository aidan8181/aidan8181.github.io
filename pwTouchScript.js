$( "*", document.body ).click(function( event ) {
  event.stopPropagation();
  var domElement = $( this ).get( 0 );
  var pwScriptReturn = document.createElement("p");
  pwScriptReturn.id = "pwScriptReturn";
  document.body.appendChild(pwScriptReturn);
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
  pwScriptReturn.innerHTML = domElement.nodeName;
  console.log("TESTING TESTING TESTING");
});
