const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function showResults(lista) {
  const novaDiv = document.createElement("div");
  const novoTexto = document.createTextNode(lista);
  novaDiv.appendChild(novoTexto);

  document.body.appendChild(novaDiv);
}

function kata1() {
  // implemente o código do kata 1 aqui

  let resultado = [];
  for (i = 1; i <= 25; i++) {
    resultado.push(i);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata1();

function kata2() {
  // implemente o código do kata 2 aqui
  let resultado = [];
  for (i = 25; i >= 1; i--) {
    resultado.push(i);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata2();

function kata3() {
  // implemente o código do kata 3 aqui
  let resultado = [];
  for (i = 1; i <= 25; i++) {
    resultado.push(i * -1);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata3();

function kata4() {
  // implemente o código do kata 4 aqui
  let resultado = [];
  for (let i = 25; i >= 1; i--) {
    resultado.push(i * -1);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata4();

function kata5() {
  // implemente o código do kata 5 aqui
  let resultado = [];
  for (let i = 25; i >= -25; i -= 2) {
    resultado.push(i);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata5();

function kata6() {
  // implemente o código do kata 6 aqui
  let resultado = [];
  for (i = 3; i <= 100; i++) {
    if (i % 3 === 0) {
      resultado.push(i);
    }
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata6();

function kata7() {
  // implemente o código do kata 7 aqui
  let resultado = [];
  for (i = 7; i <= 100; i++) {
    if (i % 7 === 0) {
      resultado.push(i);
    }
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata7();

function kata8() {
  // implemente o código do kata 8 aqui
  let resultado = [];
  for (i = 100; i >= 3; i--) {
    if (i % 7 === 0) {
      resultado.push(i);
    }
    if (i % 3 === 0) {
      resultado.push(i);
    }
  }
  resultadoUni = [...new Set(resultado)];
  showResults(resultadoUni.join(", "));
  return resultado;
}
kata8();

function kata9() {
  // implemente o código do kata 9 aqui
  let resultado = [];
  for (i = 5; i <= 100; i++) {
    if (i % 5 === 0 && i % 2 !== 0) {
      resultado.push(i);
    }
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata9();

function kata10() {
  // implemente o código do kata 10 aqui
  resultado = [];
  for (let i = 0; i <= sampleArray.length; i++) {
    resultado.push(sampleArray[i]);
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata10();

function kata11() {
  // implemente o código do kata 11 aqui
  let resultado = [];
  for (let i = 0; i <= sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0) {
      resultado.push(sampleArray[i]);
    }
  }
  showResults(resultado);
  return resultado;
}
kata11();

function kata12() {
  // implemente o código do kata 12 aqui
  let resultado = [];
  for (let i = 0; i <= sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      resultado.push(sampleArray[i]);
    }
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata12();

function kata13() {
  // implemente o código do kata 13 aqui
  let resultado = [];
  for (let i = 0; i <= sampleArray.length; i++) {
    if (sampleArray[i] % 8 === 0) {
      resultado.push(sampleArray[i]);
    }
  }
  showResults(resultado.join(", "));
  return resultado;
}
kata13();

function kata14() {
  // implemente o código do kata 14 aqui
  let resultado = [];
  for (let i = 0; i <= sampleArray.length; i++) {
    resultado.push(sampleArray[i] * sampleArray[i]);
  }
  resultado.pop();
  showResults(resultado.join(", "));
  return resultado;
}
kata14();

function kata15() {
  // implemente o código do kata 15 aqui
  let resultado = 0;
  for (let i = 1; i <= 20; i++) {
    resultado = resultado + i;
  }
  showResults(resultado);
  return resultado;
}
kata15();

function kata16() {
  // implemente o código do kata 16 aqui
  let resultado = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    resultado = resultado + sampleArray[i];
  }
  showResults(resultado);
  return resultado;
}
kata16();

function kata17() {
  // implemente o código do kata 17 aqui
  let resultado = sampleArray[0];
  for (let i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] < resultado) {
      resultado = sampleArray[i];
    }
  }
  showResults(resultado);
  return resultado;
}
kata17();

function kata18() {
  // implemente o código do kata 18 aqui
  let resultado = sampleArray[0];
  for (let i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] > resultado) {
      resultado = sampleArray[i];
    }
  }
  showResults(resultado);
  return resultado;
}
kata18();

// /**
//  * Daqui em diante são os bônus, por sua conta e risco
//  */

// function kataBonus1() {
//   // implemente o código do kata bonus 1 aqui
// }

// function kataBonus2() {
//   // implemente o código do kata bonus 2 aqui
// }

// function kataBonus3() {
//   // implemente o código do kata bonus 3 aqui
// }

// function kataBonus4() {
//   // implemente o código do kata bonus 4 aqui
// }

// function kataBonus5() {
//   // implemente o código do kata bonus 5 aqui
// }
