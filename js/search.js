var results = [];
var resultslink = [];
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var xmlDoc = xmlhttp.responseXML;
    var locs = xmlDoc.getElementsByTagName('loc');
    for (i = 0; i < locs.length; i++) {
      var link = locs[i].childNodes[0].nodeValue;
      resultslink.push(link);
      var linkarray = link.split('/');
      //console.info(locs[i].childNodes[0].nodeValue);

      results.push(linkarray[linkarray.length - 2]);

      //console.info(linkarray[linkarray.length-2]);
    }
    //search(keyword);
  }
}
xmlhttp.open("GET", "/sitemap.xml", true);
xmlhttp.send();

//var keyword = "every";

function search() {

  var keyword = $("#keyword").val();
  if (typeof(keyword) != "undefined" && keyword != null && keyword!=""){
    console.info(keyword);
    var resultext=[];
    $("#searchresultext").empty();
    for (var c = 0; c < resultslink.length; c++) {
      if (resultslink[c].search(keyword) != -1) {
        resultext.push(resultslink[c]);
        var a = document.createElement('a');
        var text = document.createTextNode(results[c]);
        a.append(text);
        a.setAttribute('href',resultslink[c]);
        a.setAttribute('target',"_blank");
        a.setAttribute('class',"search-result-unit");
        a.setAttribute('style',"overflow-y: scroll;max-height: 15rem;");
        $("#searchresultext").append(a);
        $("#searchresultext").append("<br/>");
        console.info(resultslink[c]);
      } else {
        console.info("not found");
      }
    }
  }
  //return resultext;
}
function searchbygoogle(){
  var keyword = $("#keyword").val();
  window.open('https://www.google.com/search?q=site:kknackgear.top+'+keyword);
}
/*
$(document).ready(function(){
  $("button#clear").click(function(){
    $("#searchresultext").empty();
  });
});
*/
