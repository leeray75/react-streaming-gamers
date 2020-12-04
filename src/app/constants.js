export const CLIENT_ID = "okw0v0an6kkc5uv05n6xbavd494t2p";
export const LOCAL_SERVER = "http://localhost:3100";
const SCOPES = ["viewing_activity_read", "user:read:email"];
const scope = encodeURI(SCOPES.join(" "));
export const AUTH_URL = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${LOCAL_SERVER}&scope=${scope}`;
export const AUTH_STORAGE_KEY = "REACT:STREAMING:GAMERS:AUTH";