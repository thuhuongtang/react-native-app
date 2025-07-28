// app/_layout.tsx
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// import './globals.css';

export default function Layout() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Slot />
        </SafeAreaView>
    );
}
