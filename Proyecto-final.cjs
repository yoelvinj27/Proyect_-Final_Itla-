const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese su nombre: ", (nombre) => {
    entrada.question("Ingrese su apellido: ", (apellido) => {
        entrada.question("Ingrese su edad: ", (edad) => {
            entrada.question("Ingrese su sexo (M/F): ", (sexo) => {
                edad = parseInt(edad);
                sexo = sexo.toUpperCase();

                console.log("\n--- RESULTADO ---");
                console.log("Nombre:", nombre);
                console.log("Apellido:", apellido);
                console.log("Edad:", edad);

                if (edad >= 18) {
                    console.log("Es mayor de edad");
                } else {
                    console.log("Es menor de edad");
                }

                if (sexo === "M") {
                    console.log("Sexo: Masculino");
                } else if (sexo === "F") {
                    console.log("Sexo: Femenino");
                } else {
                    console.log("Sexo no válido");
                }

                entrada.close();
            });
        });
    });
});