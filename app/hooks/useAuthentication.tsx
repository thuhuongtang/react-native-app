import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { account } from '../lib/appwrite';

const validate = (email: string, password: string) => {
    if (!email || !password) {
        return false;
    }
    return true;
};

const useAuthentication = () => {
    const [loading, setLoading] = useState(false);

    const register = async (email: string, password: string) => {
        setLoading(true);
        console.log('Registering user with email:', email, 'and password:', password);
        if (!validate(email, password)) return Alert.alert('Invalid email or password');
        try {
            await account.create('unique()', email, password);
                
            const registerUser = await account.createEmailPasswordSession(email, password);
            console.log('User registered:', registerUser);
        } catch (error) {
            Alert.alert('Error registering user', error.message);
            console.log('Error registering user:', error);
        }
        setLoading(false);
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        console.log('Logging in user with email:', email, 'and password:', password);
        if (!validate(email, password)) return Alert.alert('Invalid email or password');
        try {
            const registerUser = await account.createEmailPasswordSession(email, password);
            console.log('User registered:', registerUser);
        } catch (error) {
            Alert.alert('Error login user', error.message);
            console.log('Error login user:', error);
        }
        setLoading(false);
    };

    const logout = async () => {
        setLoading(true);
        console.log('Logging out user');
        try {
            await account.deleteSession('current');
            console.log('User logged out');
        } catch (error) {
            Alert.alert('Error logging out user', error.message);
            console.log('Error logging out user:', error);
        }
        setLoading(false);
    };

  return {
    register,
    login,
    logout,
    loading
  }
}

export default useAuthentication