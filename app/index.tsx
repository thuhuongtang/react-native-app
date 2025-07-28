import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { account } from './lib/appwrite';
import './globals.css';

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        account.get()
            .then(() => router.replace('/screens/dashboard'))
            .catch(() => router.replace('/screens/auth')); // no session
    }, []);

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
}
