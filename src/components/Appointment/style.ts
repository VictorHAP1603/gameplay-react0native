import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center'
    },  

    content: {
        flex: 1,
    },

    header: {   
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 22,

    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },

    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24,
    },

    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    date: {
        marginLeft: 12,
        fontSize: 13,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading
    },

    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24
    },

    player: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        marginLeft: 7,
        
    }
})