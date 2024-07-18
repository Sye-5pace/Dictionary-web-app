export interface Idictionary{
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    sourceUrls: string[]
    origin: string;
    meanings: Meaning[];
}

interface Phonetic {
    text: string;
    audio?: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definitions[]
}

interface Definitions {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
}

export interface IErrorMessage {
  [index: string]: string;
}
