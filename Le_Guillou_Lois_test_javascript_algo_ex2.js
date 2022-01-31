function isDifferent(array) {
    var sortArray = array.sort((a,b)=>a-b);
    var arraySorted = ['1','2','3','4','5','6','7','8','9'];
    var isOK = 0;
    for (var i=0; i<array.length; i++) {
        if (sortArray[i] == arraySorted[i]) {
           isOK+=1;
        }
    }
    if (isOK ==9){
        return true;
    } else {
        return false;
    }
}