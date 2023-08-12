const YOUTUBE_API_KEY = "AIzaSyBgQSSJV7jZ3AAQR7Q48uifwIYuxMczQTQ";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_LIVE_CHAT_API = "https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=YOUR_CHAT_ID&part=snippet%2CauthorDetails&key=" + YOUTUBE_API_KEY;


