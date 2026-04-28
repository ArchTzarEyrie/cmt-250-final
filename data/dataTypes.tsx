// TSX style definitions of the data types used in the final

/**
 * Task: an individual to-do list item
 * 
 * id           - number to identify an individual Task
 * text         - a string to display for the Task in the UI
 * dueDate      - the users preferred Date by which to complete this Task
 * isComplete   - whether the Task should display as complete (filled radio button)
 */
type Task = {
    id: number,
    text: string,
    dueDate: Date,
    isComplete: boolean,
}

/**
 * Operation: an individual attempted network call and the info to retry it
 * 
 * id           - number to identify an individual Operation
 * value        - the Task that was being sent to the BE
 * url          - the URL that the app attempted to hit
 * method       - an enum saving what method to use in the retried network call
 */
type Operation = {
    id: number,
    value: Task | null,
    url: string,
    method: ('POST' | 'DELETE'),
}