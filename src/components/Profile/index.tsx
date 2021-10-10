import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../Avatar'

import { styles } from './style'

export const Profile = () => {
    return (
        <View style={styles.container}>

            <Avatar urlImg="https://github.com/VictorHAP1603.png" />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Victor
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}