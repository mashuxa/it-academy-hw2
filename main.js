(function () {
    "use strict";

    function printMyString(...myParams) {
        let arrWords = myParams[myParams.length - 1].toString().split(" ");
        let arrTime = [];
        for (let time of myParams) {
            if (!isNaN(time)) {
                arrTime.push(time);
            }
        }
        let timer = 0;

        function printWords(word) {
            console.log(word);
        }
        for (let i = 0; i < arrWords.length; i++) {
            if (arrTime[i]) {
                timer = timer + arrTime[i];
            }
            else {
                timer = timer + arrTime[arrTime.length - 1];
            }
            let word = arrWords[i];
            setTimeout(printWords, timer * 1000, word);
        }
    }
    printMyString(2, 5, 1, "Карл у Клары украл кораллы");
}());