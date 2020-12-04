var rows = 5;
var cols = 5;

var myArray = [];

for ( var i = 0; i < rows; i++) {
    myArray[i] = [];
    for ( var j = 0; j < cols; j++) {
        x = Math.floor((Math.random() * 100) +1);
        x = parseInt(x);
        myArray[i][j] = x;
    }
}
console.log(myArray);

var min = myArray[0][0];
for ( var i = 0; i < myArray.length; i++) {
    for ( var j = 0; j < myArray[i].length; j++) {
        if (min > myArray[i][j]) {
            min = myArray[i][j];
        }
    }   
}
console.log("Min array is:" + min);
