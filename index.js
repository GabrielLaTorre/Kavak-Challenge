let validParagraph = false;
let validWordsNotAllowed = false;
let paragraph;
let clean;
let mostFrequent;
let wordsNotAllowed = [];

do {
    if(!validParagraph) {
        paragraph = prompt("Ingrese un párrafo: (Caracteres alfabéticos y signos de puntuación !?',;.");
        
        if(!validateParagraph(paragraph)) {
            alert("Ingrese un párrafo válido");
            continue;
        };

        validParagraph = validateParagraph(paragraph);
    }

    if(!validWordsNotAllowed) {
        const wordsQty = prompt("Cuantas palabras desea ingresar como no permitidas? (Ingrese un número)");

        if(isNaN(wordsQty)) {
            alert("Ingrese un número válido")
            continue;
        };

        for (let i = 1; i <= wordsQty; i++) {
            const element = prompt(`Ingrese la ${i}º palabra: (Solo minúsculas)
            Párrafo ingresado: ${paragraph}`);
            wordsNotAllowed.push(element);
        };

        if(!validateWordsNotAllowed(wordsNotAllowed)) {
            wordsNotAllowed = [];
            alert("Ingrese palabras válidas");
            continue;
        };

        validWordsNotAllowed = validateWordsNotAllowed(wordsNotAllowed);
    }

} while(!validParagraph || !validWordsNotAllowed)

clean = cleanParagraph(paragraph, wordsNotAllowed);
mostFrequent = getMostFrequentedWord(clean);

document.getElementById("enteredParagraph").innerHTML = `Entered paragraph: ${paragraph}`
document.getElementById("mostFrequent").innerHTML = `Most frequent word: ${mostFrequent.word}, number of times it appears: ${mostFrequent.quantity}`