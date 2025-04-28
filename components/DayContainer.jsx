import { View } from 'react-native';
import Task from './Task';
import TaskDate from './TaskDate';

const DayContainer = ({ tasks, date, fetchTasks }) => {
    return (
        <View>
            <TaskDate dueDate={date} />
            {tasks.map(task => <Task key={task.id} {...task} fetchTasks={fetchTasks} />)}
        </View>
    );
}

export default DayContainer;