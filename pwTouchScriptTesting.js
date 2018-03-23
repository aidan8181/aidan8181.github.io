$( "*", document.body ).dblclick(function( event ) {
  event.stopPropagation();

  //await sleep(4500);
  var touchedDomElement = $( this ).get( 0 ); // Get the touch DOM element from the document

   //touchedDomElement = $( this ).get( 0 ); // Get the touch DOM element from the document
  var pwScriptReturnValue = document.getElementById("pwScriptReturn"); // Get the created price watcher (PW) dom element
  pwScriptReturnValue.innerHTML = touchedDomElement.nodeName + " | " + getElementXPath(touchedDomElement) + " | " + touchedDomElement.innerHTML; // Set the created PW DOM elements inner html to touched elements node name
  console.log(touchedDomElement.innerHTML); // Print inner html of the touched element to the console NOTE: for debugging

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
  console.log(getElementXPath(touchedDomElement));
});