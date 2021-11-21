import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { Poppins, Colors } from '../Stylers'


const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '100%',
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
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  title: {
    color: Colors.WHITE,
    fontSize: height > 720 ? 30 : 27,
    fontFamily: Poppins._600,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20%',
    marginBottom: '5%',
  },
  button: {
    backgroundColor: Colors.LIGHT,
    height: 38,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: '8%',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: -5,
  },
  content: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 15,
    marginRight: 'auto',
  },
  subtitle: {
    fontWeight: 'bold',
    color: Colors.LIGHT,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  auxiliar: {
    fontWeight: 'bold',
    color: Colors.LIGHT,
    fontSize: 17
  }
})

export default styles