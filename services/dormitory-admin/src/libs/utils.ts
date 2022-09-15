import { SortingEnum, Student } from "../apis/types";

export const sortedStudents = (sortType: SortingEnum, data?: Student[]) => {
    let students = data ?? [];
    switch(sortType) {
        case SortingEnum.a:
            break;
        case SortingEnum.b:
            students = students.filter(student => student.penalty_training_status);
            break;
        case SortingEnum.c:
        case SortingEnum.d:
        case SortingEnum.e:
        case SortingEnum.f:
        case SortingEnum.g:
            const level = Object.values(SortingEnum).slice(2).indexOf(sortType) + 1;
            students = students.filter(students => students.penalty_level === level);
            break;
    }
    return students;
}

export const download = (downloadURL: string, name: string) => {
    const a = document.createElement("a");
    a.href = downloadURL;
    a.download = name;
    a.click();
    a.remove();
};

export const getDateString = (date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
}

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

export const escapeRegExp = (string: string) => {
  return (string && reHasRegExpChar.test(string))
  ? string.replace(reRegExpChar, '\\$&')
  : (string || '')
}

export const ch2pattern = (ch: string) => {
  const offset = 44032;
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) {
      return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      'ㄱ': '가'.charCodeAt(0),
      'ㄲ': '까'.charCodeAt(0),
      'ㄴ': '나'.charCodeAt(0),
      'ㄷ': '다'.charCodeAt(0),
      'ㄸ': '따'.charCodeAt(0),
      'ㄹ': '라'.charCodeAt(0),
      'ㅁ': '마'.charCodeAt(0),
      'ㅂ': '바'.charCodeAt(0),
      'ㅃ': '빠'.charCodeAt(0),
      'ㅅ': '사'.charCodeAt(0),
    } as Record<string, number>;
    const begin = con2syl[ch] || ( ( ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ'] );
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  return escapeRegExp(ch); //5. 함수 개조
}

export const createFuzzyPattern = (query: string) => {
    const pattern = query.split('').map(ch2pattern).join('.*?');
    return new RegExp(pattern);
}