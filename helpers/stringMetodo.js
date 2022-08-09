/**
 * Esta funcion recibe un texto y devuelve una palabra con el indice 0 en mayuscula
 * @author Digital House 
 * @param {string} palabra 
 * @returns {string}
 */

const capitalizar = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}


/**
 * Esta funcion recibe un texto y separa las palabras en un array y nos devuelve las primeras letras de cada palabra en mayuscula mediante la funcion capitalizar
 * @param {string} texto 
 * @returns {string}
 */
export const normalizar = (texto) => {
  return texto.split(" ").map(palabra => capitalizar(palabra)).join(" ");
}

/**
 * Esta funcion recibe un texto y lo codifica a b64
 * @param {string} texto
 * @returns {string}
 */
export const codificar = (texto) => { 
  return btoa(texto)
}

/**
 * Esta funcion recibe un texto codificado y lo decodifica en b64
 * @param {string} texto
 * @returns {string}
 */
export const decodificar = (texto) => {
  return atob(texto)
}