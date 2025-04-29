/**
 * TASK X
 * 
 * implement and export a component Upcoming that:
 *  - groups all global 'tasks' into groups based on the month and date of their due date
 *      - the util function isSameDate in @/util/utils can help with this
 *  - render a DayContainer for each unique month/date pair, and pass to it all tasks with that
 *    month/date pair
 *  - render and manage a Modal from 'react-native' with only the component CreateTaskModal as a child
 *  - render a CreateTaskButton component from @/util/utils that shows the modal when clicked
 */

import { Text, View, StyleSheet, Modal } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useState, useContext } from 'react';
import CreateTaskModal from '@/components/CreateTaskModal';
import { TasksContext } from '@/data/TasksContext';
import { isSameDate, CreateTaskButton } from '@/util/utils';

const Upcoming = () => {

    const tasks = useContext(TasksContext);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

    const uniqueDates = [];
    tasks.forEach(task => {
        if (uniqueDates.findIndex(date => isSameDate(date, task.dueDate)) < 0) {
            uniqueDates.push(task.dueDate);
        }
    });
    const dayContainers = [];

    uniqueDates.forEach(date => {
        dayContainers.push(
            <DayContainer 
                tasks={tasks.filter(task => isSameDate(date, task.dueDate))}
                date={date}
                key={date}
            />
        );
    });

    return (
        <View style={showCreateTaskModal ?  styles.containerWithModal : styles.container}>
            <View style={styles.headerContainer}>
                <Text>Upcoming</Text>
            </View>
            {dayContainers}
            <Modal
                animationType='slide'
                visible={showCreateTaskModal}
                onRequestClose={() => {
                    setShowCreateTaskModal(false);
                }}
                transparent={true}
            >
                <CreateTaskModal 
                    showCreateTaskModal={showCreateTaskModal}
                    setShowCreateTaskModal={setShowCreateTaskModal}
                />
            </Modal>
            <CreateTaskButton onPress={() => setShowCreateTaskModal(true)} />
        </View>
        
    )
}

export default Upcoming;

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