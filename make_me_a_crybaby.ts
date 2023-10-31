const replacements = new Map();
replacements.set('c', ['c', 's', 'z', 'k']);
replacements.set('s', ['c', 's', 'z']);
replacements.set('z', ['c', 's', 'z']);
replacements.set('q', ['k']);
replacements.set('i', ['i', '1']);
replacements.set('i ', ['i', '1']);
replacements.set('n ', ['m', 'n', 'ñ']);
replacements.set('m ', ['m', 'n', 'ñ']);
replacements.set('ñ ', ['m', 'n', 'ñ']);


function getReplacement(original_letter: string): string {
    const replacement = replacements.get(original_letter);
    if (replacement === undefined) {
        return original_letter;
    }
    return replacement;
}


function getRandomCase(original_letter: string): string {
    const randomInteger = Math.round(Math.random() * 1);
    if (randomInteger === 0) {
        return original_letter.toLowerCase();
    }
    else {
        return original_letter.toUpperCase();
    }
}


function makeMeCry(original_text: string): string {
    let result: string = '';
    for (const letter of original_text) {
        let replacement = getReplacement(letter);
        replacement = getRandomCase(replacement);
        result += replacement;
    }
    return result;
}

makeMeCry('esto es para probar que onda a ver si funcaaa!');
