function wordFreq(text) {
    // Normalizar a minúsculas
    text = text.toLowerCase();
    // Remover puntuación básica [,.:;!?]
    text = text.replace(/[.,:;!?]/g, '');
    // Separar en palabras
    const words = text.split(/\s+/).filter(Boolean);
    // Crear el Map de frecuencias
    const freqMap = new Map();
    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }
    return freqMap;
}

// Ejemplo de uso:
console.log(wordFreq("Hola, hola! chau.")); // Map { 'hola' => 2, 'chau' => 1 }