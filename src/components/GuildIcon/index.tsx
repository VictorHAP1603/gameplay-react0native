import React from 'react'
import { Image } from 'react-native'

import { styles } from './style'

export const GuildIcon = () => {
    const uri = "https://intervarsity.org/sites/default/files/discord_metro_icon_by_destuert_dbtif5j-fullview.jpg"

    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}