let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0], positive=[], n=0;
function findPositiveNumbers(arr){

    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
        positive[n]=arr[i]
        n++;
        }
    }
    return positive
}
findPositiveNumbers(arr)
