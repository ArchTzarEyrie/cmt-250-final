export const isSameDate = (date1, date2) => {
    return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

export const getNewTaskId = (tasks) => {
    if (tasks.length > 0) {
        tasks.sort((a, b) => {
            return b.id - a.id
        });
        return tasks[0].id + 1;
    }
    return 1;
}