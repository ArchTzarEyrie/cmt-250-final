/**
 * TASK 5
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

    return null;
}

export default Today;

// styles declared for the header if you decide to make one
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    }
  });