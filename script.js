document.getElementById('submit').onclick =  () => {
    document.getElementById("phrase").innerHTML = "";
    document.getElementById("picture").removeAttribute('src');
    document.getElementById("picture").removeAttribute("width");
    document.getElementById("picture").removeAttribute("height");
    document.getElementById("result").value = "";
    document.getElementById("result").innerHTML = "";


    const message = document.getElementById("message").value.trim();
    
    if (message.length == 0) {
        let r = Math.floor(Math.random() * 10) % 3;
        document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[r].phrase;
        document.getElementById("picture").src = randomPhrasesAndPictures[r].imageURL;
        document.getElementById("picture").setAttribute("width", "400px");
        document.getElementById("picture").setAttribute("height", "280px");
        return;
    }
    if (message.length < 20) {
        alert("The message is too small!");
        return;
    }
    
    let messageWords = message.split(/[.,\n\t\r ]+/gi);
    messageWords = messageWords.map(elem => elem.toLowerCase());
    console.log(messageWords);
    let occurrences = {};

    for (let word of messageWords) {
        if (occurrences[word]) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    }

    let max = 0;
    let theMostFrequentWord = '';

    for (let word of messageWords) {
        if (occurrences[word] > max) {
            max = occurrences[word];
            theMostFrequentWord = word;
        }
    }

    let numberOfElementsInTheArray = messageWords.length;

    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
    console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)

    document.getElementById("result").innerHTML = `The most frequent word of the message is "${theMostFrequentWord}" <br>The number of words in the message is ${numberOfElementsInTheArray}`; 

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
    ];
    let randomNumber = Math.floor(Math.random() * 3);
    $('#photo').attr('src', randomPhrasesAndPictures[randomNumber].imageURL);
    $('#rnd_message').text(randomPhrasesAndPictures[randomNumber].phrase);
}
