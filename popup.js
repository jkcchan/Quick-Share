$(document).ready(function(){

  var the_random = Math.random()*100;
  $("#init").prop('href',"https://www.reddit.com/api/v1/authorize?client_id=02oWuXvLb3ZDHA&response_type=code&state="+the_random.toString()+"&redirect_uri=http://www.example.com/unused/redirect/uri&duration=permanent&scope=submit").click(function(){
    chrome.tabs.create({url:chrome.extension.getURL('background.html')});
  });

  var clipboard = new Clipboard('.btn');
  var url = "", title="";
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
    title = tabs[0].title;
    console.log(url);
  });
  $("input[type='checkbox']").change(function(){
    $('input[type="checkbox"]').not(this).prop('checked', false);
    if($("#HTMLanchor").is(":checked")){
      $(".btn").text('Copy').show();
      $("#preview").text("<a href='"+url+"'>"+title+"</a>");
    } else if($("#link").is(":checked")){
      $(".btn").text('Copy').show();
      $("#preview").text(url);
    } else if($("#thunder").is(":checked")){
      $(".btn").text('Go to page').show().click(function(){
        var win = window.open("https://www.reddit.com/r/ThunderousWizards/submit","_blank");
        win.focus();

        });
      }
    })
});
