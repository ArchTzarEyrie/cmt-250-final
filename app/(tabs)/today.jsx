import { Text, View, StyleSheet } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useState, useEffect } from 'react';

const Today = () => {
    const [tasks, setTasks] = useState([]);

    const today = new Date();
    const todayTuple = [today.getMonth(), today.getDate()];

    const isSameDate = (tuple, date) => {
        return tuple[0] === date.getMonth() && tuple[1] === date.getDate();
    };

    const fetchTasks = () => {
        fetch('http://localhost:3000/tasks')
            .then(response => {
                response.json().then(json => {
                    setTasks(json.tasks.map(task => {
                        return {
                            ...task,
                            dueDate: new Date(task.dueDate)
                        }
                    }).sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()));
                });
            });
    }

    useEffect(() => {
        fetchTasks();
    }, []);

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