export const greetingByLanguage = {
    english: person =>  `Hello, nice to meet you ${person}, welcome!`,
    spanish: person =>  `Hola, mucho gusto ${person}, bienvenido!`,
    french: person =>  `Bonjour, ravi de vous rencontrer ${person}, bienvenue!`,
    portuguese: person =>  `Olá, prazer em conhecê-lo ${person}, seja bem-vindo!`,
    italian: person =>  `Ciao, piacere di conoscerti ${person}, benvenuto!`
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const defaultLanguage = Object.keys(greetingByLanguage).shift();

export const toCapitalLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
