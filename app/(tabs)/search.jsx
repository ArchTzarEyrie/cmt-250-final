import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Task from '@/components/Task';

const Search = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchTasks = () => {
        fetch('http://localhost:3000/tasks')
            .then(response => {
                response.json().then(json => {
                    setTasks(json.tasks.map(task => {
                        return {
                            ...task,
                            dueDate: new Date(task.dueDate)
                        }
                    }).sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()));
                });
            });
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    const searchResults = tasks.filter(task => {
        return task.text.toLowerCase().includes(searchTerm.toLowerCase());
    }).map(task => <Task {...task} showDate={true} key={task.id} fetchTasks={fetchTasks} />);

    const noSearchTerm = (
        <View>
            <Text>Search results will appear here</Text>
        </View>
    );

    const noSearchResults = (
        <View>
            <Text>No search results</Text>
        </View>
    );

    const getComponentToRender = () => {
        if (searchTerm === '') {
            return noSearchTerm;
        }
        if (searchResults.length === 0) {
            return noSearchResults;
        }
        return searchResults;
    }

    return (
        <View>
            <Text>Search</Text>
            <View style={styles.textInput}>
                <TextInput
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                />
            </View>
            <View>
                {getComponentToRender()}
            </View>
        </View>
        
    )
}

export default Search;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F5F5F5',
        margin: 20,
        borderColor: 'black',
        borderWidth: 2
    }
});