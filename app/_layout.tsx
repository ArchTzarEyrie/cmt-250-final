import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { TasksContext } from '@/data/TasksContext';
import { SetTasksContext } from '@/data/SetTasksContext';
import { en, registerTranslation } from 'react-native-paper-dates';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const [tasks, setTasks] = useState<any[]>([]);
  registerTranslation('en', en);

    const fetchTasks = () => {
        fetch('http://localhost:3000/tasks')
            .then(response => {
                response.json().then(json => {
                    const tasksToSet = json.tasks.map((task: any) => {
                      return {
                          ...task,
                          dueDate: new Date(task.dueDate)
                      }
                  }).sort((a: any, b: any) => a.dueDate.getTime() - b.dueDate.getTime());
                    setTasks(tasksToSet);
                });
            });
    }

    useEffect(() => {
      fetchTasks();
    }, []);

  return (
    <ThemeProvider value={DefaultTheme}>
      <TasksContext.Provider value={tasks}>
        <SetTasksContext.Provider value={(tasks) => {
          const newTasks = new Array(...tasks);
          newTasks.sort((a: any, b: any) => a.dueDate.getTime() - b.dueDate.getTime());
          setTasks(newTasks);
        }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SetTasksContext.Provider>
      </TasksContext.Provider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
