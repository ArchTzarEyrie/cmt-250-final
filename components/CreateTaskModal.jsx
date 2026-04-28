/**
 * TASK 4
 * 
 * props:
 *  - setShowCreateTaskModal: (boolean) => none, a void function 
 *          that sets a boolean as to whether this modal should be shown
 * 
 * This file is more complex than the others and uses components
 * from third party libraries. As such, I've left the more complex
 * parts of the infrastructure implemented, and labeled sub tasks that
 * allow you to still implement the majority of the functionality without 
 * having to contend with new content or styling
 * 
 * implement the sub tasks in the file
 *  - you can ctrl+f for "SUB-TASK" to make sure you find them
 */

import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import { DatePickerModal } from 'react-native-paper-dates';
import TaskDate from './TaskDate';
import { SetTasksContext } from '@/data/SetTasksContext';
import { TasksContext } from '@/data/TasksContext';
import { getNewTaskId, headers, CloseCreateTaskModalButton } from '@/util/utils';

const CreateTaskModal = ({ setShowCreateTaskModal }) => {
    
    /**
     * INFO
     * 
     * I've declared the variables and state you'll need in this component
     * you shouldn't need to change these
     */

    // get the function to set tasks in state
    const setTasks = useContext(SetTasksContext);

    // get the current list of tasks
    const tasks = useContext(TasksContext);

    // track the input value of the text input below
    // which is the text of the Task being created
    const [inputValue, setInputValue] = useState('');

    // track the due date of the Task being created
    const [dueDate, setDueDate] = useState(new Date());

    // track whether the date picker modal should be visible
    const [datePickerModalVisible, setDatePickerModalVisible] = useState(false);


    // SUB-TASK: 
    // implement this function send a POST message to the server
    // to create a new Task based on the values in this component's state
    // and an id received from calling the util 'getNewTaskId'
    // and then 'finally' update 'tasks' with the new value and call 'setTasks'
    const createTask = () => {
        console.log('createTask in CreateTaskModal called');
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>

                {/* This is the 'X' button in the top right corner of the modal */}
                <CloseCreateTaskModalButton 
                    // SUB-TASK
                    // pass a function that closes the create task modal
                    onPress={null}
                />

                {/* This is a text input where the user enters text of a Task */}
                <TextInput
                    style={styles.textInput}
                    editable
                    placeholder={"Task Name"}
                    placeholderTextColor={'grey'}
                    // SUB-TASK
                    // implement the onChangeText and value props of this TextInput
                    onChangeText={null}
                    value={null}
                />

                <DatePickerModal
                    mode="single"
                    // SUB-TASK
                    // implement the remaining props of this component

                    // the picker should only be visible after the Date button below is clicked
                    visible={null}

                    // pass a function that hides the date picker modal
                    onDismiss={null}

                    // the Date value that the date picker should have when it opens
                    date={null}

                    // this should set the new date value in state and close the date picker modal
                    onConfirm={(params) => {
                        // params: { date: Date }
                        // implement here
                    }}
                />

                <View style={styles.buttonRow} >
                    <View style={styles.buttonText}>

                        {/* This button shows the currently selected date, clicking it opens the date picker */}
                        <Button
                            // SUB-TASK
                            // implement the remaining props of this component
                            // Hint: you can pass a component like TaskDate to title
                            title={null}
                            // Pushing this button should reveal the date picker
                            onPress={null}
                        />

                    </View>
                    <View style={styles.buttonText}>

                        {/* This is the confirm button that creates the Task when clicked */}
                        <Button
                            title={"Confirm"}
                            // SUB-TASK
                            // implement the remaining props of this component
                            // this button should be disabled if the text input has no input
                            disabled={null}
                            // pass a function that creates the Task and then closes the modal
                            onPress={null}
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
    }
  });
