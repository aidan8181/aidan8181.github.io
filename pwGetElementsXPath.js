var _previousTouchedElement;

$(document).ready(function() {
    alert("touchScriptLoaded");

    $("*", document.body).dblclick(function(event) {
  event.stopPropagation();
  var touchedDomElement = $(this).get(0); // Get the touch DOM element from the document
  var returnValue = [getElementXPath(touchedDomElement)| touchedDomElement.innerHTML| document.title];

  if((_previousTouchedElement !== undefined) && (_previousTouchedElement !== touchedDomElement))
      _previousTouchedElement.style.outline = "0";
  
  // The following function creates an XPath from element ID
  function getElementXPath(element)
  {
      if (element && element.id)
          return '//*[@id="' + element.id + '"]'; // Return XPath using elemenet id
      else
          return getElementTreeXPath(element); // If no elemenet ID is available then call 'getElementTreeXPath(element)'
  };

  // If the previous 'function getElementXPath(element)' is unable to create the xpath from an element id this
  // function will traverse the dom to get the exact XPath of the touched elemenet
  function getElementTreeXPath(element)
  {
      var paths = []; // Array to store the paths

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

              // If nodename is not a doc type but is the same as sibling increase the index
              // this allows the XPath to pinpoint the exact element in the tree that has been touched
              if (sibling.nodeName == element.nodeName)
                  ++index;
          }

          for (var sibling = element.nextSibling; sibling && !hasFollowingSiblings;
              sibling = sibling.nextSibling)
          {
              if (sibling.nodeName == element.nodeName)
                  hasFollowingSiblings = true;
          }

          // Format the XPath to ensure it is readable by other functions
          var tagName = (element.prefix ? element.prefix + ":" : "") + element.localName;
          var pathIndex = (index || hasFollowingSiblings ? "[" + (index + 1) + "]" : "");
          paths.splice(0, 0, tagName + pathIndex);
      }

      return paths.length ? "/" + paths.join("/") : null;
  }; 
  
  if(_previousTouchedElement !== touchedDomElement)
  {
      alert(returnValue.join("|--|"));
      touchedDomElement.style.outline = "thick solid #0000FF";
      _previousTouchedElement = touchedDomElement;
  }
})

});
