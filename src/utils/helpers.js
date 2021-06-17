export const firstLetterVowel = (word, deterWithoutVowel, deterWithVowel) => {
    if (word?.length > 0) {
        return "aeiouyAEIOUY".indexOf(word[0]) === -1 ? `${deterWithoutVowel} ${word}` : `${deterWithVowel}${word}`;
    }
    return null;
}

export const toPlural = (word, count) => {
    return count > 1 ? `${word}s` : word;
}

export const dateParser = (timestamp) => {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    let date = Date.parse(timestamp);
    return new Date(date).toLocaleDateString('be-BE', options).toString();
}