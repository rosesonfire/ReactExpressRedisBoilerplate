import { streamAuthStatus, getAuthKey, fbAPI } from "./fb";

window.streamAuthStatus = streamAuthStatus;
window.getAuthKey = getAuthKey;
window.fbAPI = fbAPI;

console.log("all custom scripts loaded!!!");