import React from 'react';
import { Text, View, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'


import { styles } from './style'
import DiscordImg from '../../assets/discord.png'

type Props = RectButtonProps & {
    title: string,
}

export function ButtonIcon({ title, ...rest }: Props){

  return (
    <RectButton style={styles.container} {...rest}>
        <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon} />
        </View>

        <Text style={styles.text}>{title}</Text>
    </RectButton>
  )
} 