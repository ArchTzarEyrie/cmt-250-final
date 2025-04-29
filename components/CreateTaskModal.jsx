/**
 * TASK X
 * 
 * props:
 *  - setShowCreateTaskModal: func (boolean) => none, set a boolean as to whether this modal should be shown
 * 
 * implement the sub tasks in the file
 */

import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { DatePickerModal } from 'react-native-paper-dates';
import TaskDate from './TaskDate';
import { SetTasksContext } from '@/data/SetTasksContext';
import { TasksContext } from '@/data/TasksContext';
import { Icon } from 'react-native-paper';
import { getNewTaskId, headers  } from '@/util/utils';

const CreateTaskModal = ({ setShowCreateTaskModal }) => {
    
    const setTasks = useContext(SetTasksContext);
    const tasks = useContext(TasksContext);
    const [inputValue, setInputValue] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    // SUB-TASK: 
    // implement this function send a POST message to the server
    // to create a new Task based on the values in this component's state
    // and then 'finally' update 'tasks' with the new value and calls 'setTasks'
    const createTask = () => {
        const id = getNewTaskId(tasks);
        const newTask = {
            text: inputValue,
            isComplete: false,
            dueDate,
            id
        }
        fetch('http://localhost:3000/tasks/create', {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers
        }).finally(() => {
            tasks.push(newTask);
            setTasks(tasks);
        });
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={() => setShowCreateTaskModal(false)}
                >
                    <Icon source={"close"} size={20}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    editable
                    onChangeText={setInputValue}
                    value={inputValue}
                    placeholder={"Task Name"}
                    placeholderTextColor={'grey'}
                />
                <DatePickerModal
                    mode="single"
                    visible={modalVisible}
                    onDismiss={() => setModalVisible(false)}
                    date={dueDate}
                    onConfirm={(params) => {
                        // params: { date: Date }
                        setDueDate(params.date);
                        setModalVisible(false);
                    }}
                />
                <View style={styles.buttonRow} >
                    <View style={styles.buttonText}>
                        <Button
                            title={<TaskDate dueDate={dueDate} />}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                    <View style={styles.buttonText}>
                        <Button
                            disabled={inputValue === ''}
                            title={"Confirm"}
                            onPress={() => {
                                createTask();
                                setShowCreateTaskModal(false);
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CreateTaskModal;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'slategrey',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        margin: 5
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    }
  });
