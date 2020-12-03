import React from 'react';
import ChannelItem from './channel-item';

function Channels(props) {
	console.log("[Channels] props:",props);

    let { channels } = props;


    const results = channels.map( channel => {
    	const { user } = channel;
        const key = `channel-item-${user.id}`;
        return (
            <ChannelItem key={key} {...channel}  />
        )
    })
    return results;
}

export default Channels;