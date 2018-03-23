$( "*", document.body ).click(function( event ) {
  event.stopPropagation();

  var domElementParents = [];
  $(this).parents().addBack().not('html').each(function () {
    var entry = this.tagName.toLowerCase();
    if (this.className) {
      entry += "." + this.className.replace(/ /g, '.');
    }
    domElementParents.push(entry);
  });

  console.log(domElementParents);

  var domElement = $( this ).get( 0 );
  var pwScriptReturnPara = document.getElementById("pwScriptReturn");
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
  pwScriptReturnPara.innerHTML = domElement.nodeName;

  var xPATH = getPathTo(jQuery(domElement.nodeName).first()[0]);
  console.log(domElement.innerHTML);
  console.log(xPATH);
});
