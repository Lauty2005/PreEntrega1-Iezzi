const AYG = "A&G Travel";
alert(AYG);

let name = prompt("Ingrese su nombre");
let surname = prompt("Ingrese su apellido");

let economyBrasil = 350000;

do {
    const DESTINOS = prompt("¿A donde desea viajar?; 1. Rio de Janeino, 2. Cancun o 3. New York");

    let resultado;

    switch (DESTINOS) {
        case "1":
            const BRASIL = prompt("¿Con que aerolinea desea viajar?; Aerolineas Argentinas o Gol").toLowerCase();
            if (BRASIL == "aerolineas argentinas") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $" + economyBrasil + ", ¿Desea comprarlo?(Responda SI o NO)").toLowerCase();
                    if (ECONOMY === "si") {
                        calcular();
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $450.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 450000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            } else if (BRASIL == "gol") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $380.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 380000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $580.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 580000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!"); // Preguntar como terminar el programa aca
                    }
                }
            }
            break;

        case "2":
            const MEXICO = prompt("¿Con que aerolinea desea viajar?; Gol o Avianca").toLowerCase();
            if (MEXICO == "gol") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $1.100.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1100000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $1.400.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1400000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            } else if (MEXICO == "avianca") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $1.000.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1000000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $1.300.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1300000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            }
            break;

        case "3":
            const EEUU = prompt("¿Con que aerolinea desea viajar?; Aerolineas Argentinas, Gol o Avianca").toLowerCase();
            if (EEUU == "aerolineas argentinas") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $2.100.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 2100000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $2.600.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 2600000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            } else if (EEUU == "gol") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $2.000.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 2000000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $2.500.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 2500000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            } else if (EEUU == "avianca") {
                const PRECIO = prompt("¿Desea viajar en Economy o en Primera Clase?").toLowerCase();
                if (PRECIO == "economy") {
                    const ECONOMY = prompt("El valor del vuelo es de $1.300.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (ECONOMY === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1300000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                } else if (PRECIO == "primera clase") {
                    const PRIMERA_CLASE = prompt("El valor del vuelo es de $1.800.000, ¿Desea comprarlo?(Responda SI o NO").toLowerCase();
                    if (PRIMERA_CLASE === "si") {
                        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
                        resultado = 1800000 * CANTIDAD;
                        alert("El total a abonar es " + resultado);
                    } else if (ECONOMY === "no") {
                        alert("¡Hasta pronto!");
                    }
                }
            }
            break;
    }
    function calcular (){
        const CANTIDAD = prompt("¿Cuantos vuelos desea comprar?");
        resultado = economyBrasil * CANTIDAD;
        alert("El total a abonar es " + resultado);
    }

    continuar = prompt("¿Desea buscar otro vuelo?, SI o NO").toLowerCase();
} while (continuar === "si");

alert("Espero que le haya servido");