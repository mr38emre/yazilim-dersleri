function kontrol1() {
  var input1 = document.getElementById("html-input1").value;
  var cevap1 = "p";
  var input2 = document.getElementById("html-input2").value;
  var cevap2 = "/p";
  var input3 = document.getElementById("html-input3").value;
  var cevap3 = "h1";
  var input4 = document.getElementById("html-input4").value;
  var cevap4 = "/h1";
  if (input1 == cevap1) {
    document.getElementById("html-input1").style.color = "#46a30f";
    document.getElementById("html-input1").style.border = "solid";
    document.getElementById("html-input1").style.borderColor = "#46a30f";
    document.getElementById("html-input1").style.transition = "0.5s";
  } else {
    document.getElementById("html-input1").style.color = "#a30f1b";
    document.getElementById("html-input1").style.borderColor = "#a30f1b";
    document.getElementById("html-input1").style.border = "solid";
    document.getElementById("html-input1").style.transition = "0.5s";
  }

  if (input2 == cevap2) {
    document.getElementById("html-input2").style.color = "#46a30f";
    document.getElementById("html-input2").style.border = "solid";
    document.getElementById("html-input2").style.borderColor = "#46a30f";
    document.getElementById("html-input2").style.transition = "0.5s";
  } else {
    document.getElementById("html-input2").style.color = "#a30f1b";
    document.getElementById("html-input2").style.borderColor = "#a30f1b";
    document.getElementById("html-input2").style.border = "solid";
    document.getElementById("html-input2").style.transition = "0.5s";
  }

  if (input3 == cevap3) {
    document.getElementById("html-input3").style.color = "#46a30f";
    document.getElementById("html-input3").style.border = "solid";
    document.getElementById("html-input3").style.borderColor = "#46a30f";
    document.getElementById("html-input1").style.transition = "0.5s";
  } else {
    document.getElementById("html-input3").style.color = "#a30f1b";
    document.getElementById("html-input3").style.borderColor = "#a30f1b";
    document.getElementById("html-input3").style.border = "solid";
    document.getElementById("html-input3").style.transition = "0.5s";
  }

  if (input4 == cevap4) {
    document.getElementById("html-input4").style.color = "#46a30f";
    document.getElementById("html-input4").style.border = "solid";
    document.getElementById("html-input4").style.borderColor = "#46a30f";
    document.getElementById("html-input4").style.transition = "0.5s";
  } else {
    document.getElementById("html-input4").style.color = "#a30f1b";
    document.getElementById("html-input4").style.borderColor = "#a30f1b";
    document.getElementById("html-input4").style.border = "solid";
    document.getElementById("html-input4").style.transition = "0.5s";
  }
}
