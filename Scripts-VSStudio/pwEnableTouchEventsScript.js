(async function testingTouch() {
		function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
    var refScrpit = document.createElement("script");
    refScrpit.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
    document.body.appendChild(refScrpit);
    await sleep(2000);
    var touchScript = document.createElement("script");
    touchScript.src = "https://rawgit.com/aidan8181/aidan8181.github.io/master/pwTouchScript.js";
    document.body.appendChild(touchScript);
    console.log("touchScriptLoaded");
})();

