var div = document.createElement("div");

div.innerHTML = `<div class="menu-container ">
<div class="menu" style="background-color: #0000002f; ">
    <ul>
      <li class='menu-logo desktop'><a href="/index.html"><img src="img/cdn.png" alt="CDN logo" /></a></li>
      <li class='mobile'><a href="index.html">HOME</a></li>

      
      <li><a href="socios" target="_blank">SOCIOS</a></li>
      
      <li>
        
      
      <li class='right-btn shop-btn'><a href="https://www.instagram.com/matias.molinaok/">INGRESAR</a></li>

    </ul>
</div>
</div>`;

document.currentScript.parentNode.insertBefore(
  div.firstElementChild,
  document.currentScript
);


document.addEventListener("DOMContentLoaded", () => {

  $('head').append('<link rel="stylesheet" href="menu-style.css" type="text/css"/>');
  $('head').append('  <link rel="stylesheet" href="ionicons.min.css" type="text/css">');
  
  $("#agent-btn").click(function(e) {
    Intercom('showNewMessage');
  });
});
