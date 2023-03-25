export const iniciaCon = (str, strToFind) => str.startsWith(strToFind)
export const terminaCon = (str, strToFind) => str.endsWith(strToFind)
export const incluyeEn = (str, strToFind) => str.includes(strToFind)
export const rellenaCon = (str, strToFind) => str.padStart(strToFind)
export const templateString = (persona) => `Bienvenido ${persona.nombre} ${persona.apellido}, entraste como ${persona.rol}`