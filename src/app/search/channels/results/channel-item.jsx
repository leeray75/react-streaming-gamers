import React from 'react';
import classNames from 'classnames';
import LiveTvIcon from '@material-ui/icons/LiveTv';

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
    const { broadcaster_language, display_name, game_id, id, is_live, started_at, tag_ids, thumbnail_url, title } = props;
    const classes = classNames({
        "channel-item": true,
        "live": is_live
    })

    const url = `https://www.twitch.tv/${display_name}`;
    //const url = `twitch://stream/${display_name}`;
    return (
        <div className={classes} data-channel-id={id}>
            <a href={url} target="_blank">
            <div className="thumbnail">
                <img src={thumbnail_url} />
            </div>
            <div className="user-info">
                <div>
                    <span className="display-name">{display_name}</span>
                    <span className="live-icon"><LiveIcon live={is_live} /></span>
                </div>
                <div className="title" title={title}>{title}</div>
            </div>
            
            </a>
        </div>
    )
}



export default ChannelItem;