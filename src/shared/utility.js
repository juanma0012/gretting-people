/**
 * It's  an object with the available languages and a default greeting by language
 */
export const greetingByLanguage = {
    english: person => `Hello, nice to meet you ${person}, welcome!`,
    spanish: person => `Hola, mucho gusto ${person}, bienvenido!`,
    french: person => `Bonjour, ravi de vous rencontrer ${person}, bienvenue!`,
    portuguese: person => `Olá, prazer em conhecê-lo ${person}, seja bem-vindo!`,
    italian: person => `Ciao, piacere di conoscerti ${person}, benvenuto!`
};

/**
 * Method that returns a new object with the properties updated
 * @param {Object} oldObject, Contains all the  properties of the object
 * @param {Object} updatedProperties, Contains the properties to be replaced wit new values
 * @returns {Object}, New Object updated
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

/**
 * Method that returns the default language
 * @returns {string}, default language
 */
export const defaultLanguage = Object.keys(greetingByLanguage).shift();

/**
 * Method that returns a word in capital letter
 * @returns {string}, word in capittal letter
 */
export const toCapitalLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
