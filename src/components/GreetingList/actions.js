import * as actionTypes from './actionTypes';
const polyglotMaster = {
    english: (people) => people.map(person => {
        return `Hello, nice to meet you ${person}, welcome!`;
    }),
    spanish: (people) => people.map(person => {
        return `Hola, mucho gusto ${person}, bienvenido!`;
    }),
    french: (people) => people.map(person => {
        return `Bonjour, ravi de vous rencontrer ${person}, bienvenue!`;
    }),
    portuguese: (people) => people.map(person => {
        return `Olá, prazer em conhecê-lo ${person}, seja bem-vindo!`;
    }),
    italian: (people) => people.map(person => {
        return `Ciao, piacere di conoscerti ${person}, benvenuto!`;
    })
};
export const setGreetings = (people, language) => {
    let greetings = polyglotMaster[language](people);
    return { type: actionTypes.SET_GREETINGS, greetings };
};
