document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("manaColor").addEventListener('change', function(e) {
	      manaTheme(e.target.value)
    })
});
function manaTheme(value) {
    switch (value) {
      case "colorless":
        document.getElementById("bedecked").setAttribute("class", "theme-colorless");
        break;
      case "white":
        document.getElementById("bedecked").setAttribute("class", "theme-white");
        break;
      case "blue":
        document.getElementById("bedecked").setAttribute("class", "theme-blue");
        break;
      case "black":
        document.getElementById("bedecked").setAttribute("class", "theme-black");
        break;
      case "red":
        document.getElementById("bedecked").setAttribute("class", "theme-red");
        break;
      case "green":
        document.getElementById("bedecked").setAttribute("class", "theme-green");
        break;
     case "manaTheme":
  document.getElementById("bedecked").setAttribute("class", "theme-default");
       break;
   }
}