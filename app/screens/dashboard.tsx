import { View, Text, Pressable } from 'react-native';
import { account } from '../lib/appwrite';
import { useRouter } from 'expo-router';

export default function Dashboard() {
    const router = useRouter();

    const logout = async () => {
        await account.deleteSession('current');
        router.replace('/');
    };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold mb-6">Dashboard</Text>
            <Pressable onPress={logout} className="bg-red-600 px-4 py-2 rounded">
                <Text className="text-white">Logout</Text>
            </Pressable>
        </View>
    );
}
