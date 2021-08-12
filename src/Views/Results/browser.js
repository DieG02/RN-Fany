
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=faint&key=AIzaSyB0oQg_yzXTiaNox4DZfN2asm7t6boKTbY&maxResults=3


export async function handleOnSubmit(request, setResults) {
  const { base, query, key, max } = request;
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