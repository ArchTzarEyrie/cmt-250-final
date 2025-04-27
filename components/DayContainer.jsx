import { View } from 'react-native';
import Task from './Task';
import TaskDate from './TaskDate';

const DayContainer = ({ tasks, date }) => {
    return (
        <View>
            <TaskDate dueDate={date} />
            {tasks.map(task => <Task key={task.id} {...task}/>)}
        </View>
    );
}

export default DayContainer;