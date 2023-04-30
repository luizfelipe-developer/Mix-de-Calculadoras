function converter() {
  let number = document.getElementById("valorUm").value;
  let selectUm = document.getElementById("selectMedidaUm").value;
  let selectDois = document.getElementById("selectMedidaDois").value;

  if (selectUm == "km" && selectDois == "hm") {
    number = number * 10;
  } else if (selectUm == "km" && selectDois == "dam") {
    number = number * 100;
  } else if (selectUm == "km" && selectDois == "m") {
    number = number * 1000;
  } else if (selectUm == "km" && selectDois == "dm") {
    number = number * 10000;
  } else if (selectUm == "km" && selectDois == "cm") {
    number = number * 100000;
  } else if (selectUm == "km" && selectDois == "mm") {
    number = number * 1000000;
  }
  if (selectUm == "hm" && selectDois == "km") {
    number = number / 10;
  } else if (selectUm == "hm" && selectDois == "dam") {
    number = number * 10;
  } else if (selectUm == "hm" && selectDois == "m") {
    number = number * 100;
  } else if (selectUm == "hm" && selectDois == "dm") {
    number = number * 1000;
  } else if (selectUm == "hm" && selectDois == "cm") {
    number = number * 10000;
  } else if (selectUm == "hm" && selectDois == "mm") {
    number = number * 100000;
  }
  if (selectUm == "dam" && selectDois == "km") {
    number = number / 100;
  } else if (selectUm == "dam" && selectDois == "hm") {
    number = number / 10;
  } else if (selectUm == "dam" && selectDois == "m") {
    number = number * 10;
  } else if (selectUm == "dam" && selectDois == "dm") {
    number = number * 100;
  } else if (selectUm == "dam" && selectDois == "cm") {
    number = number * 1000;
  } else if (selectUm == "dam" && selectDois == "mm") {
    number = number * 10000;
  }
  if (selectUm == "m" && selectDois == "km") {
    number = number / 1000;
  } else if (selectUm == "m" && selectDois == "hm") {
    number = number / 100;
  } else if (selectUm == "m" && selectDois == "dam") {
    number = number / 10;
  } else if (selectUm == "m" && selectDois == "dm") {
    number = number * 10;
  } else if (selectUm == "m" && selectDois == "cm") {
    number = number * 100;
  } else if (selectUm == "m" && selectDois == "mm") {
    number = number * 1000;
  }
  if (selectUm == "dm" && selectDois == "km") {
    number = number / 10000;
  } else if (selectUm == "dm" && selectDois == "hm") {
    number = number / 1000;
  } else if (selectUm == "dm" && selectDois == "dam") {
    number = number / 100;
  } else if (selectUm == "dm" && selectDois == "m") {
    number = number / 10;
  } else if (selectUm == "dm" && selectDois == "cm") {
    number = number * 10;
  } else if (selectUm == "dm" && selectDois == "mm") {
    number = number * 100;
  }
  if (selectUm == "cm" && selectDois == "km") {
    number = number / 100000;
  } else if (selectUm == "cm" && selectDois == "hm") {
    number = number / 10000;
  } else if (selectUm == "cm" && selectDois == "dam") {
    number = number / 1000;
  } else if (selectUm == "cm" && selectDois == "m") {
    number = number / 100;
  } else if (selectUm == "cm" && selectDois == "dm") {
    number = number / 10;
  } else if (selectUm == "cm" && selectDois == "mm") {
    number = number * 10;
  }
  if (selectUm == "mm" && selectDois == "km") {
    number = number / 1000000;
  } else if (selectUm == "mm" && selectDois == "hm") {
    number = number / 100000;
  } else if (selectUm == "mm" && selectDois == "dam") {
    number = number / 10000;
  } else if (selectUm == "mm" && selectDois == "m") {
    number = number / 1000;
  } else if (selectUm == "mm" && selectDois == "dm") {
    number = number / 100;
  } else if (selectUm == "mm" && selectDois == "cm") {
    number = number * 10;
  }

  document.getElementById("resultDois").innerHTML =
  number.toLocaleString("pt-BR") + selectDois;
}
