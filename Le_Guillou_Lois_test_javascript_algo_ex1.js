var to_verify = new Array(9);
var to_check = new Array(9);

//passer d'un tableau de caractères à un tableau de chiffres
function getNumbers(stringArray, numberArray) {
    for (let i=0 ; i<9 ; i++) {
        numberArray[i] = stringArray[i].split(' ').map(x=>+x);
     }
}
getNumbers(array_number,to_check);


//créer le tableau sur la page web
function createTable(numberArray) {
    var body = document.getElementByTagName("body");
    var tableau = document.createElement("table");
    for (let i=0; i<9; i++){
        var ligne = document.createElement("tr");
        for (let j=0; j<9 ;j++){
            var cellule = document.createElement("td");
            cellule.appendChild(document.createTextNode(numberArray[i][j]));
            cellule.style.border = "1px solid";
            ligne.appendChild(cellule);
        }
    }
    body.appendChild(tableau);
}
createTable(to_check);