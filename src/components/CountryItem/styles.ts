import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  flagContainer: {
    flex: 1,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 5,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 10,
  },
  text: {
    fontSize: 16,
  },
});