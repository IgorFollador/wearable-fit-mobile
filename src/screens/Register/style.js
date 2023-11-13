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
  selectInput: {
    backgroundColor: theme.color_brand_dark,
  },
  button: {
    width: '80%',
    backgroundColor: theme.color_primary0,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  buttonText: {
    color: theme.color_white,
    fontSize: 25,
    fontFamily: 'Inter-Bold',
  },
  selectInput: {
    width: '80%',
    backgroundColor: theme.color_white,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: theme.color_black,
    borderRadius: 10,
  },
  selectInputText: {
    width: '80%',
    backgroundColor: theme.color_primary0,
  },
  loginText: {
    fontSize: 14,
    marginTop: 10,
    color: theme.color_black,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
  },
});

export default style;