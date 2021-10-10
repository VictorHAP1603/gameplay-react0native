import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 360,
    },

    content: {  
        marginTop: -40,
        width: '100%',
        paddingHorizontal: 50,
    },  

    title: {
        textAlign: 'center',
        color: theme.colors.heading,
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        marginBottom: 16,
        lineHeight: 40
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: theme.fonts.text400 ,
        color: theme.colors.heading,
        marginBottom: 48,
        lineHeight: 25
    }
})