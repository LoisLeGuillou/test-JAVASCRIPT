function isDifferent(array) {
    for (i=1 ; i<array.length ; i++){
        if (array[i] == array[0]) {
            return false;
        } else {
            return true;
        }
    }
}