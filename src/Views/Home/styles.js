import { StyleSheet, Dimensions } from 'react-native'
import { Poppins, Colors } from '../Stylers'


const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 5,
  },
  title: {
    color: Colors.WHITE,
    fontSize: height > 720 ? 30 : 27,
    marginLeft: 20,
    position: 'absolute',
    fontFamily: Poppins._600,
    top: '25%',
  },
  subtitle: {
    color: Colors.LIGHT,
    fontSize: 20,
    fontFamily: Poppins._600,
    marginBottom: '3%',
    width: '100%',
  },
  artists: {
    marginTop: '30%',
  },
  recents: {
    marginTop: '13%',
  },
  playlists: {
    marginTop: '13%',
    marginHorizontal: 20,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default styles