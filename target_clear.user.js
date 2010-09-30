// ==UserScript==
// @name        Link Religion: Clear Target Blank
// @namespace   http://devewm.com/projects/linkreligion/
// @version     1.0
// @description Finds all links which have target=_blank set and clears the attribute
// @license     WTFPL; http://sam.zoy.org/wtfpl
// @include     *
// ==/UserScript==

(function(){
	// prevent screwing with stuff inside tinyMCE editors etc.
	if(window != window.top) return;
	
	var allLinks = document.getElementsByTagName('a');
	for(var i = allLinks.length; i--;) {
		var link = allLinks[i];
		if(link.target == '_blank') {
			link.target = "";
		}
	}
}());