import * as React from 'react';
import {
    View, TextInput, TextInputProps
} from 'react-native';
import { TEXT_COLOR_40 } from '../utils/COLORS';

interface ZenTextInputProps extends TextInputProps {
    icon?: () => React.ReactNode;
}

const ZenTextInput = ({
    icon, ...restPops
}: ZenTextInputProps) => (
    <View>
        {
            icon && (
                <View
                    className='absolute left-[10] top-[22] z-10'
                >
                    {icon()}
                </View>
            )
        }
        <TextInput className={`h-[45] w-[85vw] 
                border border-gray-500 
                bg-surface rounded-[10] 
                text-text 
                px-[10] mt-[10]
                ${icon ? 'pl-[40]' : 'pl-[10]'}`}
            // style={{
            //     height: 45,
            //     width: SCREEN_WIDTH * 0.85,
            //     borderColor: 'gray',
            //     borderWidth: 1,
            //     backgroundColor: COLORS.SURFACE_COLOR,
            //     borderRadius: 10,
            //     color: COLORS.TEXT_COLOR,
            //     paddingHorizontal: 10,
            //     marginTop: 10,
            //     paddingLeft: icon ? 40 : 10,
            // }}
            placeholderTextColor={TEXT_COLOR_40}
            {...restPops}
        />
    </View>
);

export default ZenTextInput;
