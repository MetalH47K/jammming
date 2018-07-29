const uat = ''
const clientID = '1fad9aa853344b3a8f16a07a14aea984';
const URI = 'http://localhost:3000/'

const Spotify = {
    getAccessToken() {
        if (uat ==! '') {
            return uat
        } else {
            window.location.href.match(/access_token=([^&]*)/
            /expires_in=([^&]*)/)
        }

        /* Step 79-81/83 went over my head 
        https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI

        I need assistance understanding the concepts.

            */
    }
    
  
          }

  export default Spotify;