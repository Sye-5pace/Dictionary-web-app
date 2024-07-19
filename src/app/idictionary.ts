export interface Idictionary {
  word: string;
  phonetic?: string;
  phonetics?: IPhonetics[];
  meanings: IMeaning[];
  sourceUrls: string[];
}

interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms?: string[];
}

interface IDefinition {
  definition: string;
  example?: string;
}

interface IPhonetics {
  text: string;
  [key: string]: string | undefined;
}
export interface IErrorMessage {
  [index: string]: string
}
