import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        marginLeft: 'auto',
        marginRight: 'auto',

        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',

        
    },

    iconWrapper: {
        width: 56,
        height: 56,

        justifyContent: 'center',
        alignItems: 'center',

        borderRightColor: theme.colors.line,
        borderRightWidth: 1,
    },

    icon: {
        width: 24,
        height: 18,
    },

    text: {
        flex: 1,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        textAlign: 'center',
    },

})