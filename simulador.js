function costoDeEnvio(codigoPostal, tipoDeServicio) {
  if (
    codigoPostal > 1000 &&
    codigoPostal < 1500 &&
    tipoDeServicio == "Regular"
  ) {
    let precioCaba = 250;
    let servicioRegular = 50;
    return precioCaba + servicioRegular;
  } else if (
    codigoPostal > 1000 &&
    codigoPostal < 1500 &&
    tipoDeServicio == "Premium"
  ) {
    let precioCaba = 250;
    let servicioPremium = 250;
    return precioCaba + servicioPremium;
  } else if (
    codigoPostal > 1500 &&
    codigoPostal < 1900 &&
    tipoDeServicio == "Regular"
  ) {
    let precioGBA = 350;
    let servicioRegular = 50;
    return precioGBA + servicioRegular;
  } else if (
    codigoPostal > 1500 &&
    codigoPostal < 1900 &&
    tipoDeServicio == "Premium"
  ) {
    let precioGBA = 350;
    let servicioPremium = 250;
    return precioGBA + servicioPremium;
  } else if (
    codigoPostal > 1900 &&
    codigoPostal < 9000 &&
    tipoDeServicio == "Regular"
  ) {
    let precioInterior = 600;
    let servicioRegular = 50;
    return precioInterior + servicioRegular;
  } else if (
    codigoPostal > 1900 &&
    codigoPostal < 9000 &&
    tipoDeServicio == "Premium"
  ) {
    let precioInterior = 600;
    let servicioPremium = 250;
    return precioInterior + servicioPremium;
  } else {
    return "Lo lamentamos, pero los datos ingresados no son válidos";
  }
}

function calcular() {
  let codigoPostal = prompt("Por favor ingrese su código postal");
  let tipoDeServicio = prompt(
    "Ingrese el tipo de servicio que desea. Recuerde que puede escoger entre Regular o Premium"
  );
  let resultado = costoDeEnvio(codigoPostal, tipoDeServicio);
  alert("El costo de su envío será de $" + resultado);
}
