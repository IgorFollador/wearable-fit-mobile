import {StyleSheet} from 'react-native';
import theme from '../../theme';

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: theme.color_white,
        backgroundColor: theme.color_white,
    },
    logo: {
        width: 180,
        height: 200,
        marginBottom: 50,
    },
    title: {
        fontSize: 32,
        marginBottom: 50
    },
    button: {
        width: '80%',
        backgroundColor: theme.color_primary10,
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: theme.color_white,
        fontSize: 25,
        fontFamily: 'Inter-Bold',
    },
});

export default style;