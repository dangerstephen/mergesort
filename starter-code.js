function mergeSort(arr) {
  var length = (arr.length-1),
        mid    = Math.round(length/2),
        left   = arr.slice(0, mid),
        right  = arr.slice(mid, length);

    if(length < 2) {
      return arr;
    }
  
  return merge(mergeSort(left), mergeSort(right));
  
}


function merge(left, right) {
  //variable to hold result
  var myResults = []; 
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            myResult.push(right.shift());
        }
    }
 
    while (left.length)
        myResult.push(left.shift());
 
    while (right.length)
        myResult.push(right.shift());
 
   
  
  return myResults; 

}
