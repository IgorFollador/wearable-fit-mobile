import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: theme.color_white,
    backgroundColor: theme.color_white,
  },
  logo: {
    width: 163,
    height: 200,
    marginBottom: 50,
  },
  input: {
    fontFamily: 'Inter-Regular',
    color: theme.color_black,
    width: '80%',
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: theme.color_black,
    borderRadius: 24,
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
  registerText: {
    fontSize: 14,
    marginTop: 10,
    color: theme.color_black,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
  },
});

export default styles;