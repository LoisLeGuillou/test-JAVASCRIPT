var to_verify = new Array(9);
var to_check = new Array(9);

//passer d'un tableau de caractères à un tableau de chiffres

function getNumbers(stringArray, numberArray) {
    for (let i=0 ; i<stringArray.length ; i++) {
        numberArray[i] = stringArray[i].split(' ').map(x=>+x);
    }
}

getNumbers(array_number,to_check);


//créer le tableau sur la page web

function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable(to_check);