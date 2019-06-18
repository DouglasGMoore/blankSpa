document.querySelector("#globe").addEventListener("click", function change() {
    let colors = document.body.style.backgroundColor;
    console.log(colors);
    if (colors === "white") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
  
  document.querySelector("#globe").addEventListener("click", function() {
    let colors = document.body.style.backgroundColor;
    let x = document.getElementsByClassName("list");
    var i;
    if (colors === "white") {
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
      }
    } else {
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
      }
    }
  });