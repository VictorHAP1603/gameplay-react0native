import React, {useState} from 'react'
import { SafeAreaView, View } from 'react-native'

import { styles } from './style'

// Components
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAd'
import { CategorySelect } from '../../components/CategorySelect'

export const Home = () => {
    const [category, setCategory] = useState('1')

    function handleCategoryActive(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd  activeOpacity={0.7} />
            </View>

            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategoryActive}
                />
            </View>

        </SafeAreaView>
    )
}