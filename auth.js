var url="";
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	url = tabs[0].url;
});
url = url.split("?");
var state = url[1].split("&")[0];
var code = url[1].split("&")[1];
document.getElementById('state').innerHTML(state);
document.getElementById('code').innerHTML(code);