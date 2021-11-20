import ytdl from 'react-native-ytdl'
import TrackPlayer from 'react-native-track-player';

export async function asyncFetchSound(id) {
  if(id === '') return null;
  const url = 'https://www.youtube.com/watch?v=' + id
  console.log('Fetching resources...');
  const data = await ytdl(url, { quality: 'highestaudio' })
  const info = await ytdl.getBasicInfo(url, { quality: 'highestaudio' })
  console.log('Completed!')

  return {
    resource: data[0].url,
    duration: info.formats[0].approxDurationMs
  }
}


export async function asyncLoadSound(playlistData) {
  await TrackPlayer.reset();
  await TrackPlayer.add(playlistData);
  await TrackPlayer.play(); 
}

export async function handleOnSubmit(params, setResults) {
  const { base, query, key, max } = params;
  const req = `${base}&q=${query}${key}${max}`;
  const response = await fetch(req)
  .then(res => res.json())
  .then((data) => {
    return data.items
  })
  setResults(response);
}


export async function handleOnInfinityScroll () {
  const { base, query, key, max, order, next } = request;
  fetch(`${base}&q=${query}${key}${max}${order}&pageToken=${next}`)
    .then(res => res.json())
    .then((data) => {
      setData(data);
      setResults([...results, ...data.items]);
      setRequest({ ...request, next: data.nextPageToken })
    })
}
