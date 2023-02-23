import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    flex: 1,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },
});