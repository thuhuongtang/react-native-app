/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    Text, TouchableOpacity, StyleProp,
    ActivityIndicator
} from 'react-native';

interface ZenButtonProps {
    children: React.ReactNode
    secondary?: boolean
    style?: StyleProp<any>
    onPress: () => void
    loading?: boolean
    disabled?: boolean
}

const ZenButton = ({
    children, secondary, style, onPress, loading, disabled
}: ZenButtonProps) => {
    
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            disabled={disabled || loading}
            className={`h-[50] w-[85vw] 
                justify-center items-center 
                ${disabled ? 'opacity-50' : 'opacity-100'}
                ${secondary ? 'bg-secondary' : 'bg-primary'}
                rounded-[10]`}
        >
            {loading
                ? <ActivityIndicator />
                : (
                    <Text className='text-text text-[15] font-semibold'>
                        {children}
                    </Text>
                )}
        </TouchableOpacity>
    );
};

export default ZenButton;
