import React from 'react'
import Channels from './channels';

function ChannelsGrid(props) {
    require('./channels-grid.scss');
    console.log("[ChannelsGrid] props:", props);

    let { streams, users } = props;
    if (users == null || users.length < 1) {
        return null;
    }
    const liveIds = streams.map(stream => {
        return stream.user_id;
    })
    let channels = users.map(user => {

        let stream = streams.find(stream => {
            return user.id == stream.user_id;
        })

        let channel = {
            isLive: liveIds.includes(user.id),
            stream: stream,
            user: user

        }
        return channel;
    })

    channels = channels.sort((channelA, channelB) => {
        let flag = (channelA.isLive === false && channelB.isLive === true) ? 1 : -1;
        if (channelA.isLive === true && channelB.isLive === true) {
            flag = channelA.stream.viewer_count < channelB.stream.viewer_count ? 1 : -1;
        } else if (channelA.isLive === false && channelB.isLive === false) {
            flag = channelA.user.display_name.localeCompare(channelB.user.display_name) === 1 ? 1 : -1;
        }
        //console.log("[ChannelsGrid] compare:",flag,"\n",channelA,"\n",channelB)
        return flag;
    })


    return (
        <div className="channels-grid">
             <Channels channels={channels}  />
         </div>
    )


}
export default ChannelsGrid;