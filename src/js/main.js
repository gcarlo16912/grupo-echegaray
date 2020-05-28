let btnScrollTop = document.getElementById("btn-scroll-top");
btnScrollTop.addEventListener("click", () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

// Script navbar menu
$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
    });

  return false;
});

/**
 * script galeria de imagenes en seccion proyecto
 */
if(window.innerWidth >= 768 ){
  $("#galeria_proyecto").lightSlider({
    loop:true,
    auto: true,
    gallery:false,
    item:3,
    thumbItem:9,
    enableDrag: false,
    currentPagerPosition:'left',
    onSliderLoad: function(el) {
        el.lightGallery({
            selector: '#galeria_proyecto .lslide',
        });
    }  
  });
}else{
  $("#galeria_proyecto").lightSlider({
    autoWidth:true,
    loop:true,
    auto: false,
    gallery:false,
    item:3,
    thumbItem:9,
    enableDrag: false,
    currentPagerPosition:'left',
    onSliderLoad: function(el) {
        el.lightGallery({
            selector: '#galeria_proyecto .lslide',
        });
        $('#galeria_proyecto').removeClass('cS-hidden');
    }  
  });
}


$("#send-contact").click(() => {
  formContact("giancarlo", "gcarlo.com", "986432497");
});

//script formulario de contacto
function formContact(name, email, phone) {
  let data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("phone", phone);

  fetch("./app/app.php", {
    method: "post",
    body: data,
  })
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
    });
}
