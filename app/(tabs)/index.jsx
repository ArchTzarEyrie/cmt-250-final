import { Text, View } from 'react-native';
import DayContainer from '@/components/DayContainer';

const Upcoming = () => {
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