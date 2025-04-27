import { Text, View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

const Task = ({text, isComplete }) => {

    const [completeState, setCompleteState] = useState(isComplete);

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="isComplete"
                        status={completeState ? 'checked' : 'unchecked'}
                        onPress={() => setCompleteState(!completeState)}
                        color="#007BFF"
                    />
                    <Text>{text}</Text>
                </View>
            </View>
        </View>
    );
}

export default Task;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    radioGroup: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});