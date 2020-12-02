import React from 'react';
import FollowItem from './follow-item';

function Results(props) {
	console.log("[FollowsResults] props:",props);
	const {streams} = props;
	const liveIds = streams.map( stream => {
		return stream.user_id;
	})
    let {follows } = props;
    if(liveIds.length>0) {
    	follows = follows.sort( follow => {
    		return liveIds.includes(follow.to_id) ? -1 : 1;
    	})
    }

    const results = follows.map( follow => {
    	const { from_id, to_id } = follow;
        const key = `users-follow-item-from-${from_id}-to-${to_id}`;
        const isLive = liveIds.includes(follow.to_id);
        return (
            <FollowItem key={key} {...follow} isLive={isLive} />
        )
    })
    return results;
}

export default Results;