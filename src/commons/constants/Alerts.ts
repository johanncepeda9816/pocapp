import { Alert } from "react-native";

const Auth_error = () => {
  return Alert.alert(
    "Datos incorrectos",
    "Has ingresado datos incorrectos, intenta nuevamente"
  );
};

const Required_fields = () => {
  return Alert.alert(
    "Campos imcompletos",
    "Completa todos los campos obligatorios"
  );
};

const Internal_error = () => {
  return Alert.alert(
    "Error interno",
    "Se ha producido un error, intenta nuevamente"
  );
};

export { Auth_error, Internal_error, Required_fields };
