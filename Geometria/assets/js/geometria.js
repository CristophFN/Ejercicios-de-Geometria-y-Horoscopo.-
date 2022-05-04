function figGeometricas() {
  console.log("Ingresa el valor a elegir del menú: ");
  console.log(
    "*MENU*'\n'1.- Cuadrado'\n'2.- Circulo'\n'3.- Rectangulo'\n'4.- Triangulo"
  );
  let variable = prompt();

  switch (variable) {
    case "1":
    case 1:
      let lado = prompt("Ingresa el valor de un lado del cuadrado");
      let area = lado * lado;
      let perimetro = 4 * lado;
      console.log(
        "El area del cuadrado es de " +
          area +
          " y el perimetro es de " +
          perimetro
      );
      break;

    case "2":
    case 2:
      let radio = prompt("Ingresa el radio del circulo");
      let areaCir = Math.PI * radio ** 2;
      let circunferencia = Math.PI * (2 * radio);
      console.log(
        "El area del circulo es de " +
          areaCir +
          " y el diametro es de " +
          circunferencia
      );
      break;

    case "3":
    case 3:
      let baseRect = prompt("Ingresa la base del rectángulo");
      let alturaRect = prompt("Ingresa la altura del rectángulo");
      if (baseRect == alturaRect) {
        console.log(
          "Un rectángulo debe llevar valores diferentes de base y altura"
        );
      } else if (baseRect != alturaRect) {
        let areaRect = baseRect * alturaRect;
        let perimetroRect = baseRect + baseRect + alturaRect + alturaRect;
        console.log(
          "El area del rectángulo es de " +
            areaRect +
            " y el perimetro es de " +
            perimetroRect
        );
      }
      break;

    case "4":
    case 4:
      let baseTrian = prompt("Ingresa la base del triángulo");
      let alturaTrian = prompt("Ingresa la altura del triángulo");
      let areaTrian = (baseTrian * alturaTrian) / 2;
      let perimetroTrian = baseTrian + 2 * alturaTrian;
      console.log(
        "El area del triángulo es de " +
          areaTrian +
          " y el perimetro es de " +
          perimetroTrian
      );
      break;

    default:
      console.log("Ingresa una opción válida");
      break;
  }
}

figGeometricas();
