import {Stack } from 'expo-router';

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen
            name='(home_screen)'
            options={{headerShown: true , title: 'Shop'}}
            />
            <Stack.Screen
            name='(screen)'
            options={{headerShown: true , title: 'Screen'}}
            />
        </Stack>

    );

}