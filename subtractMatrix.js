/**
 * @param m
 * @param n
 * @returns {Array}
 * This function is useful for subtracting two 2-d arrays of same dimensions.
 * Note: function will not work on arrays with different dimensions or on non-2-d arrays.
 */
function subtractMatrix(m,n) {

    var result = [];

    for(var i = 0; i < m.length; i++){
        result[i] = [];
        for(var j = 0; j < m[i].length; j++){
            result[i][j] = m[i][j] - n[i][j];
        }
    }

    return result;

}

