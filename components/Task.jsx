/**
 * TASK 2
 * 
 * props:
 *  - text: String, the text to render for the Task
 *  - isComplete: Boolean, determines if the radio button should be checked off
 *  - id: int, id used by the database to indicate this task
 *  - dueDate: Date, date the Task is scheduled for
 *  - showDate: Boolean, determines if the due date should be displayed on the Task, defaults to false
 * 
 * create and export a component Task that:
 *  - displays a radio button that indicates if the task is complete
 *      - when the radio button is pressed, update the isComplete value for this task in memory and in the server
 *  - displays the passed text component
 *  - displays the month and date of the Task if showDate is true
 *  - display a button that, when pressed, deletes this task from memory and the server
 * 
 * REMINDER: you can get the global list of tasks and setTasks function from 
 * TasksContext and SetTasksContext respectively
 */

import { Text, View, StyleSheet, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useContext } from 'react';
import TaskDate from './TaskDate';
import { SetTasksContext } from '@/data/SetTasksContext';
import { TasksContext } from '@/data/TasksContext';
import { headers } from '@/util/utils';

const Task = ({ text, isComplete, id, dueDate, showDate }) => {

    return (
        <View style={styles.container}>
            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    {/* Render the RadioButton here */}
                    <View style={styles.radioTextContainer}>
                        {/* Render the text of the task and date if showDate is true here */}
                    </View>
                </View>
                <View>
                    {/* Render the delete task button here*/}
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