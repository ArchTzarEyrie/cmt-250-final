import { Text, View } from 'react-native';
import Task from '@/components/Task';

const Upcoming = () => {
    const tasks = [
        {
            id: 1,
            text: "Finish Final Project",
            isComplete: false,
            dueDate: new Date(),
            useTime: false,
        },
        {
            id: 2,
            text: "Create Server",
            isComplete: false,
            dueDate: new Date(),
            useTime: false,
        }
    ]
    return (
        <View>
            <Text>Upcoming</Text>
            {tasks.map(task => <Task key={task.id} {...task}/>)}
        </View>
        
    )
}

export default Upcoming;