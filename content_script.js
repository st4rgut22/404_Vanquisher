var url = window.location.href;
var validLink;

validateLink(url);

function validateLink(link){
	console.log("validating link");
	$.getJSON('http://archive.org/wayback/available?url=' + link,function(data){
		console.log(data);
		if (!$.isEmptyObject(data['archived_snapshots']))
		{
			let code = data['archived_snapshots']['closest']['status'];
			validLink = data['archived_snapshots']['closest']['url'];
		}
		chrome.runtime.sendMessage({valid:validLink}, function(response) {});
	});
}

