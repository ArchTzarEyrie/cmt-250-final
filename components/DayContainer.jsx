/**
 * TASK X
 * 
 * props:
 *  - tasks: Task[], an array of Task objects
 *  - date: a date tuple, [month: int, date: int]
 * 
 * implement and export a component DayContainer that:
 *  - returns a View containing all child components
 *  - the child components should have:
 *      - a TaskDate component
 *      - a list of Task components, one for each entry in the 'tasks' prop
 */

import { View, StyleSheet } from 'react-native';
import Task from './Task';
import TaskDate from './TaskDate';

const DayContainer = ({ tasks, date }) => {
    return (
        <View style={styles.container}>
            <TaskDate dueDate={date} />
            {tasks.map(task => <Task key={task.id} {...task} />)}
        </View>
    );
}

export default DayContainer;

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 10
    },
  });