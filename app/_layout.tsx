import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { TaskContext } from '@/data/TaskContext';
import { DirtyContext } from '@/data/DirtyContext';

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

  const [tasks, setTasks] = useState([]);
  const [isDirty, setIsDirty] = useState(false);

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
                    setIsDirty(false);
                });
            });
    }

    useEffect(() => {
      if (isDirty) {
        fetchTasks();
      }
    }, [isDirty]);

  return (
    <ThemeProvider value={DefaultTheme}>
      <TaskContext.Provider value={tasks}>
        <DirtyContext.Provider value={() => setIsDirty(true)}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </DirtyContext.Provider>
      </TaskContext.Provider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
