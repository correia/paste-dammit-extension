// Copyright 2012 Jim Correia. All rights reserved.

/* Find <input/> elements which have oncopy/onpaste="return false;" and clear the onpaste attribute.
   There are other techniques for disabling paste in input elements. Currently we do not detect and disable them.
*/
var elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
	var e = elements[i];
	if (shouldNullifyHandler(e.oncopy)) {
		e.oncopy = "";
	}
	if (shouldNullifyHandler(e.onpaste)) {
		e.onpaste = "";
	}
}

function shouldNullifyHandler(handler) {
	var functionString = String(handler);
	return functionString.match(/.*\s*return\s+false\b/);
}