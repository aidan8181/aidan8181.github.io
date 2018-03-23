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
  console.log(domElement.innerHTML);

  function getElementXPath(element)
  {
      if (element && element.id)
          return '//*[@id="' + element.id + '"]';
      else
          return getElementTreeXPath(element);
  };

  function getElementTreeXPath(element)
  {
      var paths = [];

      // Use nodeName (instead of localName) so namespace prefix is included (if any).
      for (; element && element.nodeType == Node.ELEMENT_NODE; element = element.parentNode)
      {
          var index = 0;
          var hasFollowingSiblings = false;
          for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
          {
              // Ignore document type declaration.
              if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                  continue;

              if (sibling.nodeName == element.nodeName)
                  ++index;
          }

          for (var sibling = element.nextSibling; sibling && !hasFollowingSiblings;
              sibling = sibling.nextSibling)
          {
              if (sibling.nodeName == element.nodeName)
                  hasFollowingSiblings = true;
          }

          var tagName = (element.prefix ? element.prefix + ":" : "") + element.localName;
          var pathIndex = (index || hasFollowingSiblings ? "[" + (index + 1) + "]" : "");
          paths.splice(0, 0, tagName + pathIndex);
      }

      return paths.length ? "/" + paths.join("/") : null;
  };

  console.log(getElementXPath(domElement));

});