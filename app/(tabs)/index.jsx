import { Text, View } from 'react-native';
import DayContainer from '@/components/DayContainer';
import { useState, useEffect } from 'react';

const Upcoming = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(response => {
                response.json().then(json => {
                    console.log(json);
                    setTasks(json.tasks.map(task => {
                        return {
                            ...task,
                            dueDate: new Date(task.dueDate)
                        }
                    }));
                });
            });
    }, []);

    const uniqueDates = new Set(tasks.map(task => task.dueDate));
    console.log(uniqueDates);
    const dayContainers = [];

    uniqueDates.forEach(date => {
        dayContainers.push(<DayContainer tasks={tasks.filter(task => task.dueDate.getTime() === date.getTime())} date={date} key={date}/>);
    });

    return (
        <View>
            <Text>Upcoming</Text>
            {dayContainers}
        </View>
        
    )
}

export default Upcoming;