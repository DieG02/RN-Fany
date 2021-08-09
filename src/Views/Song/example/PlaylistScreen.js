import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";

import Player from "./Player";
import playlistData from "./playlist.json";

export default function PlaylistScreen({ navigation }) {
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SEEK_TO
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE
      ]
    });
  }

  // function getStateName(state) {
  //   switch (state) {
  //     case TrackPlayer.STATE_NONE:
  //       return "None";
  //     case TrackPlayer.STATE_PLAYING:
  //       return "Playing";
  //     case TrackPlayer.STATE_PAUSED:
  //       return "Paused";
  //     case TrackPlayer.STATE_STOPPED:
  //       return "Stopped";
  //     case TrackPlayer.STATE_BUFFERING:
  //       return "Buffering";
  //   }
  // }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  async function skipToNext() {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) { }
  }

  async function skipToPrevious() {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) { }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        We'll be inserting a playlist into the library loaded from
        `playlist.json`. We'll also be using the `ProgressComponent` which
        allows us to track playback time.
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: '#ccc', height: 30, width: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Player
        style={styles.player}
        onNext={skipToNext}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
      />
      {/* <Text style={styles.state}>{getStateName(playbackState)}</Text> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  description: {
    width: "80%",
    marginTop: 20,
    textAlign: "center"
  },
  player: {
    marginTop: 40
  },
  state: {
    marginTop: 20
  }
});