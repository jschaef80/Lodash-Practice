const _ = require("lodash");

function chunk(){
    let chunkResult = _.chunk(document.getElementById("chunkInput").value, 3);
    document.getElementById("chunkOutput").innerHTML = chunkResult;
};

function reverse(){
    let reverseResult = _.reverse(document.getElementById("reverseInput").value);
    document.getElementById("reverseOutput").innerHTML = reverseResult;
};

function without(){
    let withoutResult = _.without(document.getElementById("withoutInput").value, 'a','e','i','o','u');
    document.getElementById("withoutOutput").innerHTML = withoutResult;
};

function shuffle(){
    let shuffleResult = _.shuffle(document.getElementById("shuffleInput").value);
    document.getElementById("shuffleOutput").innerHTML = shuffleResult;
};

function pebbles(){
    let pebblesResults = _.pebbles(document.getElementById("pebblesInput").value);
    document.getElementById("pebblesOutput").innerHTML = pebblesResults;
};