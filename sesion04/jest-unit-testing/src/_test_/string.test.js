import { iniciaCon,terminaCon, incluyeEn, rellenaCon, templateString } from "../string"
//import { terminaCon } from "../string";

const cupcakeipsum = "Pie chocolate bar danish toffee powder croissant. Chocolate bar fruitcake cotton candy gummi bears lemon drops. Lemon drops sweet roll halvah icing cookie gummi bears biscuit cotton candy."
const persona = "Clara"
const personas = [
    {
        nombre: "Ethien",
        apellido: "Salinas",
        rol: "admin"
    },
    {
        nombre: "Sharon",
        apellido: "Ramirez",
        rol: "estudiante"
    },
    {
        nombre: "Patty",
        apellido: "Ocampo",
        rol: "estudiante"
    },
]

test('prueba simple de iniciaCon', () => {
    expect(iniciaCon(cupcakeipsum, 'chocolate')).toBeFalsy()
    expect(iniciaCon(cupcakeipsum, 'chocolate')).toBeFalsy()
    expect(iniciaCon(cupcakeipsum, 'Pie')).toBeTruthy()
})

test('prueba simple de terminaCon', () => {
    expect(terminaCon(cupcakeipsum, 'Candy')).toBeFalsy()
    expect(terminaCon(cupcakeipsum, 'cotton')).toBeFalsy()
    expect(terminaCon(cupcakeipsum, 'candy.')).toBeTruthy()
})

test('prueba simple de incluyeEn', () => {
    expect(terminaCon(cupcakeipsum, 'Candy')).toBeFalsy()
    expect(terminaCon(cupcakeipsum, 'cottonP')).toBeFalsy()
    expect(terminaCon(cupcakeipsum, 'candy.')).toBeTruthy()
})

test('prueba simple de rellenaCon', () => {
    expect(rellenaCon(persona, '10')).toBe('     Clara')
})

test('prueba de template string', () => {
    expect(templateString(personas[0])).toBe("Bienvenido Ethien Salinas, entraste como admin")
    expect(templateString(personas[1])).toBe("Bienvenido Sharon Ramirez, entraste como estudiante")
    expect(templateString(personas[2])).toBe("Bienvenido Patty Ocampo, entraste como estudiante")
})
