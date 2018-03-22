$( "*", document.body ).click(function( event ) {
  event.stopPropagation();
  var domElement = $( this ).get( 0 );
  var pwScriptReturnPara = document.getElementById("pwScriptReturn");
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
  pwScriptReturnPara.innerHTML = domElement.nodeName;
  console.log(domElement.nodeName);
});
