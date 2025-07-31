import React from 'react'
import backgroundImage from '../../../assets/images/signup_bg.png';
import Logo from '../../../assets/images/logo_light.png';
import BackgroundScreenWrapper from '@/app/components/BackgroundScreenWrapper';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import COLORS from '@/app/utils/COLORS';
import ZenText from '@/app/components/ZenText';
import ZenTextInput from '@/app/components/ZenTextInput';
import ZenButton from '@/app/components/ZenButton';
import useAuthentication from '@/app/hooks/useAuthentication';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface SignupScreenProps {
    navigation: NavigationProp<ParamListBase>
}

const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });

    const { register, loading } = useAuthentication();

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View className='items-center'>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className='h-full justify-end'
                >
                    <View className='justify-center items-center mb-[30px]'>

                        <Image source={Logo} className='w-[100] h-[100] mb-[10]' />
                        <ZenText heading bold>ZenScape</ZenText>
                        <ZenText>
                            Find Peace, Feel Joy, Embrace Life
                        </ZenText>

                        <View className='mt-[25]'>
                            {Object.keys(credentials).map((key: string) => (
                                <ZenTextInput
                                    key={key}
                                    secureTextEntry={key === 'password'}
                                    placeholder={key}
                                    value={credentials[key]}
                                    onChangeText={(text) => setCredentials(
                                        (prevState) => ({ ...prevState, [key]: text })
                                    )}
                                />
                            )) }
                        </View>

                        <View className='mt-[15]'>
                            <ZenButton
                                onPress={() => {
                                    register(credentials.email, credentials.password);
                                }}
                                loading={loading}
                            >
                                Signup
                            </ZenButton>
                        </View>

                        <View style={{ marginTop: 1 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Login');
                                }}
                            >
                                <ZenText>Have an account? Login</ZenText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </BackgroundScreenWrapper>
    )
}

export default SignupScreen