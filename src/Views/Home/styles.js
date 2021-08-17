import { StyleSheet, Dimensions } from 'react-native'
import { Poppins, Colors } from '../Stylers'


const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
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
    marginLeft: 15,
    position: 'absolute',
    fontFamily: Poppins._600,
    top: '25%',
  },
  subtitle: {
    color: Colors.LIGHT,
    fontSize: 19,
    paddingLeft: 15,
    fontFamily: Poppins._600,
    marginBottom: '3%',
  },
  artists: {
    marginTop: '30%',
  },
  recents: {
    marginTop: '13%',
  },
  playlists: {
    marginTop: '13%',
    marginBottom: 50,
  }
})

export default styles