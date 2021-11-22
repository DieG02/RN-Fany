import { StyleSheet } from 'react-native'
import { Colors } from '../Stylers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: Colors.BLACK,
    width: '100%',
  },
  list: {
    flex: 1,
    width: '100%',
    marginBottom: 45,
    paddingHorizontal: 20,
  },
  warning: {
    color: Colors.LIGHT,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles