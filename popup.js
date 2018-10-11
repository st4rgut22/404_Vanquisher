'use strict';

var validLink;
console.log("reached popup.js");
var searchBtn = document.getElementById("searchArchive");
var linkParagraph = document.getElementById("fixedLinks");

searchBtn.addEventListener("click",function(){
	chrome.tabs.executeScript({file:'jquery-3.3.1.min.js'},function(){
		chrome.tabs.executeScript({
			file: 'content_script.js'
		});
	})
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  		console.log("i heard something");
    	let link = request.valid;
    	if (link===undefined)
    	{
    		linkParagraph.innerHTML = "Sorry, a live version of the page was not archived";
    		searchBtn.style.visibility="hidden";
    	}
    	else 
    	{
			chrome.tabs.create({url:link});
    	}
  });
