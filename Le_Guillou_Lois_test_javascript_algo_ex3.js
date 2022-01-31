var errorTable = document.createElement('table');
errorTable.setAttribute('id','error');
var errorTableBody = document.createElement('tbody');
            
var numOfCorrectRow = 0;

function checkRows (funcDiff, array) {
    for (var i=0 ; i<array.length ; i++) {
        var rowIsCorrect = funcDiff(array[i]);
        if (rowIsCorrect) {
            numOfCorrectRow+=1;
        } else {
            Ligne = array[i];
            var row = document.createElement('tr');
            var cell = document.createElement('td');
            var errorLine = 'Line ' + (i+1) + ' incorrect';
            cell.appendChild(document.createTextNode(errorLine));
            
            Ligne.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            })
            errorTableBody.appendChild(row);
        }
    }
    
}

errorTable.appendChild(errorTableBody);
document.body.appendChild(errorTable);

checkRows(isDifferent, to_check);