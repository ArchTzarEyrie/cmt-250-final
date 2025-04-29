import { Text, View, StyleSheet } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useContext } from 'react';
import { TaskContext } from '@/data/TaskContext';

const Today = () => {
    const tasks = useContext(TaskContext);

    const today = new Date();
    const todayTuple = [today.getMonth(), today.getDate()];

    const isSameDate = (tuple, date) => {
        return tuple[0] === date.getMonth() && tuple[1] === date.getDate();
    };

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text>Today</Text>
            </View>
            <DayContainer 
                tasks={tasks.filter(task => isSameDate(todayTuple, task.dueDate))}
                date={todayTuple}
            />
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