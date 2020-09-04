addEventListener("load", function () {
  var toolbar = document.querySelector('.toolbar');
  var wrapper = document.createElement('div');
  wrapper.classList.add("coming-soon");
  wrapper.innerHTML = "<h1>Coming Soon</h1> <h2>Let's play this maze game.</h2> <div class=\"toolbar-separator\"></div>";
  toolbar.insertBefore(wrapper, toolbar.firstChild);
});
