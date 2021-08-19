import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import TabBar from './TabBar'
import Player from './Player'
import { Colors } from '../Stylers'


function Footer(props) {
  
  const { state, descriptors, navigation, title } = props;
  const tabBarOptions = { state, descriptors, navigation, title };

  const displayPlayer = false;
  
  return (
    <View style={{ ...styles.container, height: displayPlayer ? 120 : 45 }}>
      {displayPlayer && 
        <Player track={currentTrack}/>
      }
      <TabBar props={tabBarOptions} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.MAIN,
    justifyContent: 'flex-end',
  }
})

export default Footer;
// const mapStateToProps = state => ({
//   displayPlayer: state.app.displayPlayer,
//   currentTrack: state.app.currentTrack
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     playerLoaded: () => dispatch(Actions.playerLoaded()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);



