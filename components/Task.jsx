import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

const Task = () => {

    const [isComplete, setIsComplete] = useState(false);

    return (
        <View>
            <RadioButton
                value="isComplete"
                status={isComplete ? 'checked' : 'unchecked'}
                onPress={() => setIsComplete(!isComplete)}
                color="#007BFF"
            />
            <Text>
                Finish Final Project
            </Text>
        </View>
    );
}

export default Task;