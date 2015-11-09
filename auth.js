var url=window.location.href;
url = url.split("?");
var state = url[1].split("&")[0];
var code = url[1].split("&")[1];
state = state.split("=")[1];
code = code.split("=")[1];
console.log(state,code);
var user = "02oWuXvLb3ZDHA";
var password = "sf4eq9TSKphdAGlzyInV7bHPouo";
if(state&&code){
	$.ajax({
		type:'POST',
		url:"https://www.reddit.com/api/v1/access_token",
		data:"grant_type=authorization_code&code="+code+"&redirect_uri=http://jacobchan.ca/Quick-Share",
		beforeSend: function (xhr) {
        	xhr.setRequestHeader('Authorization', make_base_auth(user, password));
    	},
		success:function(xhr){
			$("#status").text('done'+xhr.access_token+xhr.token_type+xhr.expires_in+xhr.scope+xhr.refresh_token);
		}
	})
}
function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return 'Basic ' + hash;
}