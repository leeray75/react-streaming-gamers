import React, { useRef } from "react"
import TwitchIcon from '@leeray75/react-streaming-gamers/icons/twitch-icon';
function TwitchLink(props) {
  const { channel_name, type } = props;
  const appUrl = `twitch://www.twitch.tv/${channel_name}`;
  const webUrl = `https://www.twitch.tv/${channel_name}`;
    window.addEventListener('notificationclick', function(e){
      console.log("Notification Clicked",e);
    })
  const handleClick = function(e){
    
    console.log("handleClick:",e);

    try {
      //document.location.href = appUrl;
    } catch(e) {
      console.error("[Link Error]:",e)
    }
  }
  

  const url = type == 'app' ? appUrl : webUrl;
  const target = type == 'app' ? "" : "_blank";
  const label = type == 'app' ? "Twitch App" : "Twitch Web"
  return (
    <a href={url} className="twitch-link" target={target} onClick={handleClick}>
      <span className="icon"><TwitchIcon/></span>
      <span className="label">{label}</span>
    </a>
  )
}

export default TwitchLink
