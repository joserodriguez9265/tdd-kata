export function adivinaNumero(numeroSecreto: number, intento: number): string {
    return numeroSecreto === intento ? "Correcto!" : "Incorrecto!"
}
