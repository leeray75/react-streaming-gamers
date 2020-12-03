import React from 'react';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import classNames from 'classnames';
import StreamInfo from './stream-info';

function LiveIcon(props) {
    if (props.live === true) {
        return (
            <LiveTvIcon />
        )
    } else {
        return null;
    }
}

function ChannelItem(props) {
    //console.log("[UserFollowItem] props:",props);
    const { isLive, stream, user } = props;
    const { display_name, offline_image_url, profile_image_url } = user;

    const handleClick = (e) => {
        e.preventDefault();
        //console.log("[UserFollowItem] Click:",display_name);
        props.onClick(user,stream);
    }
    const live = isLive ? "LIVE" : "OFFLINE";

    const classes = classNames({
        "item": true,
        "live": isLive
    })
    const url = `https://www.twitch.tv/${display_name}`;
    let thumbnail_url = isLive ? stream.thumbnail_url : profile_image_url;
    thumbnail_url = thumbnail_url.replace("{width}","300");
    thumbnail_url = thumbnail_url.replace("{height}","300");
    const title = isLive ? stream.title : "";
    return (
        <div className={classes}>
            <div className="label">
                <span className="value">{live}</span>
            </div>
            <a href={url} target="_blank" onClick={handleClick}>
            <div className="thumbnail">
                <img src={thumbnail_url} />
            </div>
            <div className="user-info">
                <div>
                    <span className="display-name">{display_name}</span>
                    <span className="live-icon"><LiveIcon live={isLive} /></span>
                </div>
                
            </div>
            <StreamInfo stream={stream} />
            
            </a>
        </div>
    )
}



export default ChannelItem;