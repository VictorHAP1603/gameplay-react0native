import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { Image, Text, View } from 'react-native'

import { styles } from './style'
import { theme } from '../../global/styles/theme'

type Props = {
    urlImg: string;
}

export const Avatar = ({ urlImg }: Props) => {

    const { secondary50, secondary70 } = theme.colors

    
    return (
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
    >
        <Image 
            source={{ uri: urlImg }}
            style={styles.avatar}
        />
    </LinearGradient>
    )
}