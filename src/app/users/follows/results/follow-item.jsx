import React from 'react';

function UserFollowItem(props) {
    const { followed_at, from_id, from_name, pagination, to_id, to_name, total, isLive } = props;

    const keys = Object.keys(props);

    const fields = keys.map( (key, index) => {
        const _key = `field-from-${from_id}-to-${to_id}-${key}`;
        return(
        <div key={_key} className="field">
            <span className="key">{key}: </span>
            <span className="value">{props[key]}</span>
        </div>
        )
    })
    const live = isLive ? "LIVE" : "OFFLINE";
    return (
        <div className="item">
            <div className="field">
                <span className="key">{live}</span>
            </div>
            {fields}
        </div>
    )
}



export default UserFollowItem;