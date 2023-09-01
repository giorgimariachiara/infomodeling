function toggleHighlight(className) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.backgroundColor === 'gray') {
      elements[i].style.backgroundColor = '';
    } else {
      elements[i].style.backgroundColor = 'gray';
    }
  }
}

$(document).ready(function(){
  $("a").hover(function(){
    $(this).addClass("hoverEffect");
  }, function(){
    $(this).removeClass("hoverEffect");
  });
});

