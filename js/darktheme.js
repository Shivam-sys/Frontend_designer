var theme_state = "light";
// var theme_state = document.body.className == "dark-theme" ? "dark" : "light";
function change_mode() {
  var modebtn1 = document.getElementById("modebtn");
  if (theme_state == "light") {
    modebtn1.style.backgroundImage = "url('/img/sunrise.svg')";
    document.body.className = "dark-theme";
    // document.getElementsByTagName('nav').classList.remove('navbar-light');
    // document.getElementsByTagName('nav').classList.add('navbar-dark');
    theme_state = "dark";
  } else {
    modebtn1.style.backgroundImage = "url('/img/moon.svg')";
    document.body.className = "light-theme";
    // document.getElementsByTagName("nav").classList.remove("navbar-dark");
    // document.getElementsByTagName("nav").classList.add("navbar-light");
    theme_state = "light";
  }
}
