import { Text, View } from 'react-native';
import DayContainer from '@/components/DayContainer';

const Today = () => {
    const tasks = [
        {
            id: 1,
            text: "Finish Final Project",
            isComplete: false,
            dueDate: new Date(),
        },
        {
            id: 2,
            text: "Create Server",
            isComplete: false,
            dueDate: new Date("May 1 2025"),
        }
    ];
    const today = new Date();
    return (
        <View>
            <Text>Today</Text>
            <DayContainer tasks={tasks.filter(task => task.dueDate.getDate() === today.getDate())} date={today} />
        </View>
        
    )
}

export default Today;