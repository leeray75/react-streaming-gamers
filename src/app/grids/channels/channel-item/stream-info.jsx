import React from 'react';
import PeopleTwoToneIcon from '@material-ui/icons/PeopleTwoTone';

function StreamInfo(props) {
    //console.log("[StreamInfo] props:", props);

    const { stream } = props;
    if (stream == null) {
        return null;
    }
    return (
        <div className="stream-info">
            <div className="game-name">{stream.game_name}</div>
            <div className="title">{stream.title}</div>
            <div className="viewer-count"><span className="icon"><PeopleTwoToneIcon /></span><span className="count">{stream.viewer_count}</span></div>
        </div>
    )
}

export default StreamInfo;