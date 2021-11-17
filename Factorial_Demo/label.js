function findLowRow() {
    var lowSum = 999;
    var lowRow = 0;
    var rowSum = 0;
    const NUM_ROWS = 4;
    const NUM_COLS = 5;

    var table = [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [0,1,0,2,3],
        [2,4,6,8,10]
    ];

    // Loop through all rows and columns of table, uses a label continue
    rowLoop: for(var row = 0; row < NUM_ROWS; row++) {
        rowSum = 0;
        for (var col = 0; col < NUM_COLS; col++) {
            rowSum += table[row][col];

            // exit this row if sum is already too large
            if (rowSum > lowSum) {
                continue rowLoop;
            }
            
        }
        //Check if this is the lowest sum so far
        if (rowSum < lowSum){
            lowSum = rowSum;
            lowRow = row;
        }
    } 
    //output result 
    var result = "Row number: " + lowRow + 
        "<br>Row sum: " + lowSum + "<br>";
    document.getElementById("textout2").innerHTML = result;
}

