import { StyleSheet, StatusBar ,Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  imageBackground: {
    position: 'absolute',
    top: '-10%',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
    transform: [{ rotate: '180deg' }],
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  header: {
    height: 45,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight,
  },
  icon: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: width - 60,
    resizeMode: 'cover' // 'contain'
  },

  options: {
    width: '100%',
    paddingHorizontal: 5,
  }
})

export default styles;