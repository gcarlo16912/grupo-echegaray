import $ from "jquery";
import "bootstrap";
import {formContact} from './main';

// script scrool top
let btnScrollTop = document.getElementById('btn-scroll-top');
btnScrollTop.addEventListener('click', () => {
  scroll({
    top: 0,
    behavior: 'smooth'
  });
})

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

$("#send-contact").click(()=>{
    formContact('giancarlo', 'gcarlo.com', '986432497');
})
