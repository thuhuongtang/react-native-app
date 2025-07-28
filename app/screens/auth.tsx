import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { account } from '../lib/appwrite';
import { useRouter } from 'expo-router';

export default function Auth() {
    const router = useRouter();
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>("");

    const handleAuth = async () => {
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Passwords must be at least 6 characters long.");
            return;
        }

        setLoading(true);
        setError(null); // Reset error state
        try {
            if (isSignup) {
                await account.create('unique()', email, password);
                await account.createEmailPasswordSession(email, password);
            } else {
                await account.createEmailPasswordSession(email, password);
            }
            router.navigate('/screens/dashboard');
        } catch (e) {
            setError("Authentication failed. Please check your credentials.");
            console.error('Error on handling auth:', e); // Silent fail
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center px-6 bg-white">
            <Text className="text-2xl font-bold mb-6 text-center">
                {isSignup ? 'Create Account' : 'Welcome Back'}
            </Text>

            <TextInput
                className="border border-gray-300 p-3 rounded mb-4"
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                className="border border-gray-300 p-3 rounded mb-4"
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />

            {error && <Text className='color-red-600'> {error}</Text>}

            <Pressable
                onPress={handleAuth}
                disabled={loading}
                className={`flex items-center justify-center p-3 rounded ${loading ? 'bg-gray-400' : 'bg-blue-600'
                    }`}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text className="text-white text-center text-base font-medium">
                        {isSignup ? 'Sign Up' : 'Login'}
                    </Text>
                )}
            </Pressable>

            <Pressable onPress={() => setIsSignup(!isSignup)} className="mt-4">
                <Text className="text-center text-sm text-gray-600">
                    {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                </Text>
            </Pressable>
        </View>
    );
}
