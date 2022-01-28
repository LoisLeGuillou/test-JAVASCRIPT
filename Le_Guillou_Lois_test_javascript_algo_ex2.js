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