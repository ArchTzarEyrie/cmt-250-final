/**
 * TASK 7
 * 
 * implement and export a component Upcoming that:
 *  - groups all global 'tasks' into groups based on the month and date of their due date
 *      - the util function isSameDate in @/util/utils can help with this
 *  - render a DayContainer for each unique month/date pair, and pass to it all tasks with that
 *    month/date pair
 *  - render and manage a Modal from 'react-native' with only the component CreateTaskModal as a child
 *      - by manage, I mean use state to track a boolean variable that determines if the modal is open or closed
 *  - render a CreateTaskButton component from @/util/utils that shows the modal when clicked
 */

import { Text, View, StyleSheet, Modal } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useState, useContext } from 'react';
import CreateTaskModal from '@/components/CreateTaskModal';
import { TasksContext } from '@/data/TasksContext';
import { isSameDate, CreateTaskButton } from '@/util/utils';

const Upcoming = () => {

    return null;
}

export default Upcoming;

// styles that I used when creating this file, you may try
// to use them if you'd like but it's not required
// you may also replace these with your own if you so choose
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    containerWithModal: {
      flex: 1,
      flexDirection: 'column',
      opacity: 0.25
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    }
  });