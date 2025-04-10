//2-4 importando a StyleSheet do comando View do React Native e importando o Titulo e Formulario para calculo do IMC de dentro da pasta components localizada dentro de src
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

//6-13 mostrando na tela o titulo da aplicação e o formulario para calcular o IMC
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

//17-24 estiliza tudo que contem o trecho: style={styles.container}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});