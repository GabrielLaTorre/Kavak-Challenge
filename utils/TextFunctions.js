const paragraphRegExp = /^[\.a-zA-Z!?',;. ]*$/;
const punctiationMarksRegExp = /[\.!?',;]/g
const wordsRegExp = /^[\.a-z]*$/;

function validateParagraph(paragraph) {
    return paragraph.length >= 1 
        && paragraph.length <= 1000
        && paragraphRegExp.test(paragraph);
}

function validateWordsNotAllowed(words) {
    return words.length <= 100
        && words.every( word => {
            return word.length >=1 
                && word.length <= 10
                && wordsRegExp.test(word);
        });
}

function cleanParagraph(paragraph, wordsNotAllowed) {
    
    paragraph = paragraph.replaceAll(punctiationMarksRegExp, '').toLowerCase();
    let splitted = paragraph.split(" ");

    if(wordsNotAllowed.length > 0) {
        wordsNotAllowed.forEach(word => {
            splitted = splitted.filter( text => text != word );
        });
    }
    return splitted.join(" ");
}

function getMostFrequentedWord(paragraph) {

    const paragraphAsArray = paragraph.split(" ");
    let count;
    let mostRepeated = {
        word: '',
        quantity: 0
    };
    
    paragraphAsArray.forEach( word => {

        count = 0;        
        let index = paragraphAsArray.indexOf(word);
        
        while(index != -1) {
            count++;
            index = paragraphAsArray.indexOf(word, index + 1);
        };
      
        if(count > mostRepeated.quantity) {
            mostRepeated.word = word;
            mostRepeated.quantity = count;
        }
    });

    return mostRepeated
}
