/**
 * TASK X
 * 
 * props:
 *  - dueDate: Date, the date of a Task
 * 
 * create and export a component TaskDate that:
 *  - returns a Text component that displays the month and date of dueDate
 *  - display the month as a 3 letter abbreviation (Jan, Feb, Mar, etc)
 */

import { Text } from 'react-native';

const TaskDate = ({ dueDate }) => {

    const month = dueDate.getMonth();
    const date = dueDate.getDate();

    const monthMap = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    return (
        <Text>{`${monthMap[month]} ${date}`}</Text>
    )
}

export default TaskDate;