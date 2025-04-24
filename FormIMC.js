//2-5 importando as funções View, TextInput, Button e StyleSheet do react-native e o Result do arquivo Result.js
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import {useState} from 'react';

//6-17 define uma constante formIMC e dentro dela outa constante calcularIMC para usar as constantes alturaMetros e peso para calcular o valor do IMC
const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        };
    };

    //20-40 faz com que a constante FormIMC retorne um formulario para colocar seu peso e altura com um botão para calcular o IMC
    return (
        <View style={StyleSheet.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType='numeric'
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType='numeric'
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
        </View>
    );
};

//43-57 cria uma stylesheet e estiliza o container do formulario e o input
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

//exporta a função para ser usada em outro arquivo
export default FormIMC;