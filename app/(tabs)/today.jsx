/**
 * TASK X
 * 
 * implement and export a component Today that:
 *  - renders a Task component for each Task in the global list of 'tasks'
 *    with the same month and date at the current date when the tab is opened
 */

import { Text, View, StyleSheet } from 'react-native';
import Task from '@/components/Task';
import { useContext } from 'react';
import { TasksContext } from '@/data/TasksContext';
import { isSameDate } from '@/util/utils';

const Today = () => {

    const tasks = useContext(TasksContext);
    const today = new Date();

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text>Today</Text>
            </View>
            {
                tasks.filter(task => isSameDate(today, task.dueDate))
                    .map(task => <Task key={task.id} {...task} />)
            }
        </View>
        
    )
}

export default Today;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    }
  });