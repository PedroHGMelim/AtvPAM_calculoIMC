//2 importando a StyleSheet de textos do React Native
import {Text, StyleSheet} from 'react-native';

//5-9 adiciona a constante titulo que caso chamada vai exibir o titulo "Calculador de IMC"
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//10-17 estiliza tudo que contem o trecho: style={styles.title}
const styles = StyleSheet.create({
    title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    },
});

//exportando o componente title para poder ser usado no app.js
export default Title;