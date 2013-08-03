$(document).ready(function() {
//Selecting Li is selecting a
  $("#toc li").click(function() {
  	var hrefValue=$(this).children("a").attr("href");
  	document.location=hrefValue;
//Scroll to top
$("a[href='#top']").click(function() {
  $("html").animate({ scrollTop: ("#site_menu").offset().top}, 100000);
  return false;
});

  });
}); 




