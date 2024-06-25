const accessAPI = function(album){
    const baseURL = 'https://ws.audioscrobbler.com/2.0/?'
    const api_key = process.env.NEXT_PUBLIC_AUDIOSCROBBLER;
    const queryParams = new URLSearchParams({
    method: 'album.search',
    album: album, // This is where you can dynamically set the album name
    api_key: api_key, // Replace 'YOUR_API_KEY' with your actual Last.fm API key
    format: 'json'
    });

    const url = `${baseURL}${queryParams.toString()}`;

    console.log(url); // This will give you the formatted URL
    const response = fetch(url, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json());
    
    return response;

}
export default accessAPI;

