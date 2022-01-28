function isDifferent (array) {
    for (var i =0 ; i < 9 ; i++){
        if (typeof array[i] == "number") {
                if (array[i].every(elem => elem != array[0])) {
                    return true;
                } else {
                    return false;
                }
        }
            
    }
}

var numOfCorrectRow = 0;

function checkRows (funcDiff, array) {
    for (var i=0 ; i<9 ; i++) {
        var rowIsCorrect = funcDiff(array[i]);
        if (rowIsCorrect) {
            numOfCorrectRow+=1;
        } else {
            console.log('Line ' + i+1 + ' incorrect');
            console.log(array[i]);
        }
    }
    
}
checkRows(isDifferent, to_check);

var numOfCorrectColumn = 0;

function checkColumns (funcDiff, array) {
    for (var i=0 ; i<9 ; i++) {
        var columnIsCorrect = funcDiff(array[0][i]);
        if (columnIsCorrect) {
            numOfCorrectColumn+=1; 
        } else {
            console.log('Column ' + i+1 + ' incorrect');
            console.log(array[0][i]);
        }
    }
}

if (numOfCorrectRow == 9 && numOfCorrectColumn == 9) {
    console.log('the table is correct');
}

//je n'ai pas eu le temps de finir