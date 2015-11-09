var url=window.location.href;
url = url.split("?");
var state = url[1].split("&")[0];
var code = url[1].split("&")[1];
state = state.split("=")[1];
code = code.split("=")[1];
console.log(state,code);
if(state&&code){
	$.ajax({
		type:'POST',
		url:"https://www.reddit.com/api/v1/access_token",
		data:"grant_type=authorization_code&code="+code+"&redirect_uri=http://jacobchan.ca/Quick-Share",

	})
}