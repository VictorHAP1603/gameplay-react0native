import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
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
        fontWeight: 'bold',
        marginBottom: 16,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        color: theme.colors.heading,
        marginBottom: 48,

    }
})