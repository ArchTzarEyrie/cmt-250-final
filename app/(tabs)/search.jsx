import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import Task from '@/components/Task';

const Search = () => {
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
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <View>
            <Text>Search</Text>
            <TextInput
                onChangeText={setSearchTerm}
                value={searchTerm}
            />
            <View>
                {searchTerm !== '' && tasks.filter(task => {
                    return task.text.toLowerCase().includes(searchTerm.toLowerCase());
                }).map(task => <Task text={task.text} isComplete={task.isComplete} />)}
            </View>
        </View>
        
    )
}

export default Search;