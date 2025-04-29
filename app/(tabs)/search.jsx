/**
 * TASK 6
 * 
 * implement and export a component Search that:
 *  - renders a TextInput that allows the user to enter a search term
 *  - renders a Task component for each Task in the global list of 'tasks'
 *    with text that includes the search term
 *  - render a message on the page if there's no search term to let the user know
 *    search results will appear once they start typing
 *  - if there are no search results, render a message stating this clearly to the user
 *    do not simply render nothing
 */

import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import Task from '@/components/Task';
import { TasksContext } from '@/data/TasksContext';

const Search = () => {

    return null;
}

export default Search;

// You can use this style on a View
// containing only your text input if you want it to look nicer
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F5F5F5',
        margin: 20,
        borderColor: 'black',
        borderWidth: 2
    }
});