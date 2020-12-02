import React from 'react';
import ChannelItem from './channel-item';

function Results(props) {
    const results = props.channels.map( channel => {
        const key = `channel-item-${channel.id}`;
        return (
            <ChannelItem key={key} {...channel} />
        )
    })
    return results;
}

export default Results;