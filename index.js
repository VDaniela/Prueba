function laCajaDePandora(numero) {
    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        // Convertir a binario
        return numero.toString(2);  // toString(2) convierte el número a binario
    } else {
        // Convertir a hexadecimal
        return numero.toString(16);  // toString(16) convierte el número a hexadecimal
    }
}

