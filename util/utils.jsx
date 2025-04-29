import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

// (Date, Date) => Boolean
// determines if two Dates have the same month and date
export const isSameDate = (date1, date2) => {
    return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

// Default headers we need to provide for our fetches to work
export const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

// Task[] => int
// Returns an id for a new task based on the highest existing id of a Task
export const getNewTaskId = (tasks) => {
    if (tasks.length > 0) {
        tasks.sort((a, b) => {
            return b.id - a.id
        });
        return tasks[0].id + 1;
    }
    return 1;
}

export const CreateTaskButton = ({ onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.floatingButton}
            onPress={onPress}
        >
            <Icon source={"plus"} />
        </TouchableOpacity>
    );
};

export const CloseCreateTaskModalButton = ({ onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.closeButton}
            onPress={onPress}
        >
            <Icon source={"close"} size={20}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    }
  });