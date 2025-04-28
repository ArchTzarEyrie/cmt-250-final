import { View, StyleSheet } from 'react-native';
import Task from './Task';
import TaskDate from './TaskDate';

const DayContainer = ({ tasks, date, fetchTasks }) => {
    return (
        <View style={styles.container}>
            <TaskDate dueDate={date} />
            {tasks.map(task => <Task key={task.id} {...task} fetchTasks={fetchTasks} />)}
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