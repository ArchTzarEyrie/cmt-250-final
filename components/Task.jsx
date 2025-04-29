import { Text, View, StyleSheet, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useContext } from 'react';
import TaskDate from './TaskDate';
import { DirtyContext } from '@/data/DirtyContext';

const Task = ({ text, isComplete, id, dueDate, showDate }) => {

    const setToDirty = useContext(DirtyContext);

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton
                        value="isComplete"
                        status={isComplete ? 'checked' : 'unchecked'}
                        onPress={() => {
                            fetch(`http://localhost:3000/tasks/update/${id}`, {
                                method: 'POST',
                                body: JSON.stringify({
                                    text,
                                    isComplete: !isComplete,
                                    id,
                                    dueDate
                                }),
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'application/json'
                                }
                            }).then(() => setToDirty());
                        }}
                        color="#007BFF"
                    />
                    <View style={styles.radioTextContainer}>
                        <Text>{text}</Text>
                        {showDate && <TaskDate dueDate={[dueDate.getMonth(), dueDate.getDate()]} />}
                    </View>
                    
                </View>
                <View>
                    <Button
                        title="X"
                        onPress={() => {
                            fetch(`http://localhost:3000/tasks/delete/${id}`, {
                                method: 'DELETE',
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then(() => setToDirty());
                        }}
                    />
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
        margin: 5
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
        justifyContent: 'space-between'
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
    radioTextContainer: {
        flexDirection: 'column'
    }
});