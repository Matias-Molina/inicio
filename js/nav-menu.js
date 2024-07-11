var div = document.createElement("div");

div.innerHTML = `<div class="menu-container ">
<div class="menu" style="background-color: #0000002f; ">
    <ul>
      <li class='menu-logo desktop'><a href="index.html"><img src="img/cdn.png" alt="CDN logo" /></a></li>
      <li class='mobile'><a href="index.html">HOME</a></li>
      
      
      <li><a href="SOCIOS/index.html" target="_blank">SOCIOS</a></li>
      
      <li><a href='#' ignore_aff>MIS CONOCIMIENTO</a>
        <ul>
        <li><a href="/sobremi/index.html">SOBRE MI</a></li>
        <li><a href="https://www.youtube.com/@podcastLJM">JUGADA MAESTRA</a></li>
        <li><a href="http://surl.li/jwxwix">REUNION ESTRATEGICA</a></li>
          <li><a href="http://surl.li/vgunrj">DIA A DIA CON UN MILLONARIO</a></li>

          <li><a href="http://surl.li/qisusj">COMO FORMAR UNA AGENCIA</a></li>

        </ul>
      </li>
      <li><a href='#' ignore_aff >RECURSOS</a>
        <ul>
          <li><a href="https://www.instagram.com/matias.molinaok/">CONTACTAME</a></li>
          <li><a href="https://www.youtube.com/@matiasmolinaok">CANAL DE YOUTUBE</a></li>
          <li><a href="https://bento.me/matias-molina" target='_blank'>SOCIAL MEDIA</a></li>
        </ul>
      </li>
      
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
