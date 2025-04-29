/**
 * TASK 3
 * 
 * props:
 *  - tasks: Task[], an array of Task objects matching the month/date pair of 'date'
 *  - date: Date, a Date object representing the month/date pair for this DayContainer
 * 
 * implement and export a component DayContainer that:
 *  - returns a View containing all child components
 *  - the child components should be:
 *      - a TaskDate component
 *      - an array of Task components, one for each entry in the 'tasks' prop
 */

import { View, StyleSheet } from 'react-native';
import Task from './Task';
import TaskDate from './TaskDate';

const DayContainer = ({ tasks, date }) => {
    return null;
}

export default DayContainer;

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 10
    },
  });