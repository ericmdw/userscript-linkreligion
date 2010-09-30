// ==UserScript==
// @name        Link Religion: Targetize Externals
// @namespace   http://devewm.com/projects/linkreligion/
// @version     1.0
// @description Finds all links to off-site resources on the page and adds target="_blank" attribute
// @license     WTFPL; http://sam.zoy.org/wtfpl
// @include     *
// ==/UserScript==

(function(){
	// prevent screwing with stuff inside tinyMCE editors etc.
	if(window != window.top) return;
	
	var domain_re = new RegExp('^http[s]?://' + window.location.host + '/');
	var allLinks = document.getElementsByTagName('a');
	for(var i = allLinks.length; i--;) {
		var link = allLinks[i];
		if(link.target) continue;
		
		if(!link.href.match(domain_re)) {
			link.target = '_blank';
		}
	}
}());