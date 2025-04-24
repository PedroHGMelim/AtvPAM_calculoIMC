//2-3 importando as funções bases do react e a StyleSheet de textos do React Native
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//6-10 adiciona constante result que exibe o resultado do imc na tela
const Result = ({imc}) => {
    return (
        <Text style={styles.result}>Seu IMC é {imc}</Text>
    );
};

//13-20 adiciona a estilização da constante result
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

//exportando o componente Result para ser usado no FormIMC
export default Result;