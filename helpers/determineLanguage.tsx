const patternEn = /[a-zA-Z]/g;
const patternRu = /[а-яА-Я]/g;

export const determineLanguage = (text: string): string => {
  const lengthEn = (text.match(patternEn) || []).length;
  const lengthRu = (text.match(patternRu) || []).length;
  return  lengthEn >= lengthRu ? 'en': 'ru';
};
