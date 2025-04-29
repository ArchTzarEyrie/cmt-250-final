import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useState, useContext } from 'react';
import { Icon } from 'react-native-paper';
import CreateTaskModal from '@/components/CreateTaskModal';
import { en, registerTranslation } from 'react-native-paper-dates';
import { TaskContext } from '@/data/TaskContext';

const Upcoming = () => {

    const tasks = useContext(TaskContext);
    console.log(tasks);
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    registerTranslation('en', en);

    const isSameDate = (tuple, date) => {
        return tuple[0] === date.getMonth() && tuple[1] === date.getDate();
    }

    const uniqueDates = [];
    tasks.forEach(task => {
        const tuple = [task.dueDate.getMonth(), task.dueDate.getDate()];
        if (uniqueDates.findIndex(date => date[0] === tuple[0] && date[1] === tuple[1]) < 0) {
            uniqueDates.push(tuple);
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
            
            <TouchableOpacity 
                style={styles.floatingButton}
                onPress={() => setShowCreateTaskModal(true)}
            >
                <Icon source={"plus"} />
            </TouchableOpacity>
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
    floatingButton: {
      backgroundColor: "#FFFFFF",
      width: 30,
      height: 30,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
      right: 10,
      elevation: 5, // For Android shadow
      shadowColor: "#000", // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    }
  });