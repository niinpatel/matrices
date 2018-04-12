/**
 * takes two matrices as input.
 * returns the product of two matrices.
 * @param m
 * @param n
 * @returns {*}
 */
function multiplyMatrix(m,n){
    var result = [];

    var mRows = m.length;
    var nRows = n.length;
    var nColumns = n[0].length;


    if(mRows !== nColumns){
        return "matrices can't be multiplied";
    }

    for(var i = 0; i < mRows; i++){
        result [i] = [];
        for(var j = 0; j < nColumns; j++){
            result[i][j] = 0;
            for(var k = 0; k < nRows; k++){
                result[i][j] += m[i][k] * n[k][j];
            }
        }
    }

    return result;
}


var m1 = [3,4,2];
var m2 = [[13,9,7,15],[8,7,4,6],[6,4,0,3]];

console.log(multiplyMatrix(m1,m2));