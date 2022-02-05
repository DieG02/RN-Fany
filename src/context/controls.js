import TrackPlayer, { State, Capability, RepeatMode } from 'react-native-track-player';

/*
* function getStateName(state) {
*   switch (state) {
*     case State.None:
*       return 'None';
*     case State.Playing:
*       return 'Playing';
*     case State.Paused:
*       return 'Paused';
*     case State.Stopped:
*       return 'Stopped';
*     case State.Buffering:
*       return 'Buffering';
*   }
* }
*/

export async function setup() {
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    alwaysPauseOnInterruption: true,
    capabilities: [
      Capability.Stop,
      Capability.Pause,
      Capability.Play,
      Capability.SeekTo,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],
    compactCapabilities: [
      // Capability.Stop,
      Capability.Pause,
      Capability.Play,
    ]
  });
}


export async function addTrack (track) {
  await TrackPlayer.reset();
  await TrackPlayer.add(track);
  await TrackPlayer.setRepeatMode(RepeatMode.Track)
  await TrackPlayer.play();
}

export async function togglePlayback(state) {
  if (state === State.Paused) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
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
