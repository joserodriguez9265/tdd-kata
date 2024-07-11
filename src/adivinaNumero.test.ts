import { adivinaNumero } from './adivinaNumero'

describe('Adivina el número', () => {

    test('adivinaNumero debe devolver "Correcto!" si adivinamos el número', () => {
        expect(adivinaNumero(7, 7)).toBe('Correcto!')
    })

    test('adivinaNumero debe devolver "Incorrecto!" si no adivinamos el número', () => {
        expect(adivinaNumero(9, 3)).toBe('Incorrecto!')
    })
})

