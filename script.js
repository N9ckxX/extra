const message = document.getElementById("message")

"use strict";

let addButton = document.querySelector('#add');
let displayButton = document.querySelector('#display');
let records = [];

addButton.addEventListener('click', addRecord);
displayButton.addEventListener('click', displayAll);

function addRecord() {
    let record = document.querySelector('#inputtext').value;

    if (!record) {
        return;
    }

    records.push(record);
    document.querySelector('#inputtext').value = '';
}

function displayAll() {
    alert(records);
}

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/
document.getElementById("button").onclick = function () {
let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;
let numberOfElementsInTheArray;


console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
    ]