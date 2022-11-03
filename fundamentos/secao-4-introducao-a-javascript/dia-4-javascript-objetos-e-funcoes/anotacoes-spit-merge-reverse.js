//*** TRANSFORMANDO STRING EM ARRAY *** .SPLIT() ***
let frase = "String normalzona";
console.log(frase);

let fraseViraStringFraseInteira = frase.split();
console.log(fraseViraStringFraseInteira);

let fraseViraStringCadaLetraUmIndex = frase.split("");
console.log(fraseViraStringCadaLetraUmIndex)

let fraseViraStringCadaPalavraUmIndex = frase.split(" ");
console.log(fraseViraStringCadaPalavraUmIndex);

let fraseViraStringCadaLetraUmIndexChameiPorIndex = frase.split("")[15]
console.log(fraseViraStringCadaLetraUmIndexChameiPorIndex);


//*** TRANSFORMAR ARRAY EM STRING *** .JOIN ***
let array = ['String de Índex 0', 'String de Índex 1', 'String de Índex 2', 'String de Índex 3']

let arrayViraFraseCadaIndexSemEspacoComVirgula = array.join();
console.log (arrayViraFraseCadaIndexSemEspacoComVirgula);

let arrayViraFraseTodosIndicesJuntosSemEspacoSemVirgula = array.join("");
console.log (arrayViraFraseTodosIndicesJuntosSemEspacoSemVirgula);

let arrayViraFraseTodosIndicesJuntosSemEspacoSemVirgulaComSeparador = array.join(" ");
console.log (arrayViraFraseTodosIndicesJuntosSemEspacoSemVirgulaComSeparador);

//*** INVERTER ARRAY *** .REVERSE ***
//***ATENÇÃO! É DESTRUTIVO (TRANSFORMA A ARRAY ORIGINAL, MESMO QUE DECLARADA COM CONST)***

const arrayParaInverter = ['String de Índex 0', 'String de Índex 1', 'String de Índex 2', 'String de Índex 3'];
console.log(arrayParaInverter)
let arrayParaInverterInvertida = arrayParaInverter.reverse();
console.log(arrayParaInverterInvertida);
console.log(arrayParaInverter);