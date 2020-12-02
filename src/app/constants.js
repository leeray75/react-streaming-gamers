const CLIENT_ID = "okw0v0an6kkc5uv05n6xbavd494t2p";
const LOCAL_SERVER = "http://localhost:3100";
const SCOPES = ["viewing_activity_read", "user:read:email"];
const scope = encodeURI(SCOPES.join(" "));
const AUTH_URL = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${LOCAL_SERVER}&scope=${scope}`;

export { CLIENT_ID, LOCAL_SERVER, AUTH_URL}