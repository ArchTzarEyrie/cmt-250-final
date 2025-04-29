/**
 * TASK 2
 * 
 * props:
 *  - text: String, the text to render for the Task
 *  - isComplete: Boolean, determines if the radio button should be checked off
 *  - id: int, id used by the database to indicate this task
 *  - dueDate: Date, date the Task is scheduled for
 *  - showDate: Boolean, determines if the due date should be displayed on the Task, defaults to false
 * 
 * create and export a component Task that:
 *  - displays a radio button that indicates if the task is complete
 *      - when the radio button is pressed, update the isComplete value for this task in memory and in the server
 *  - displays the passed text component
 *  - displays the month and date of the Task if showDate is true
 *  - display a button that, when pressed, deletes this task from memory and the server
 * 
 * REMINDER: you can get the global list of tasks and setTasks function from 
 * TasksContext and SetTasksContext respectively
 */
