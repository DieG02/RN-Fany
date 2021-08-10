import TrackPlayer from 'react-native-track-player';
import playlistData from './example/playlist.json';


export async function setup() {
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
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SEEK_TO
    ]
  });
}

/*
* function getStateName(state) {
*   switch (state) {
*     case TrackPlayer.STATE_NONE:
*       return 'None';
*     case TrackPlayer.STATE_PLAYING:
*       return 'Playing';
*     case TrackPlayer.STATE_PAUSED:
*       return 'Paused';
*     case TrackPlayer.STATE_STOPPED:
*       return 'Stopped';
*     case TrackPlayer.STATE_BUFFERING:
*       return 'Buffering';
*   }
* }
*/

export async function togglePlayback(state) {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    await TrackPlayer.reset();
    await TrackPlayer.add(playlistData);
    await TrackPlayer.play();
  } else {
    if (state === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}

export async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) { }
}

export async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) { }

}

export async function seekTo(seconds) {
  try {
    await TrackPlayer.seekTo(seconds);
  } catch (_) { }
}
