import React from 'react';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import { 
    View, 
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style'
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode
}

export function Background({ children }: Props){

    const { secondary80, secondary100 } = theme.colors

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
} 