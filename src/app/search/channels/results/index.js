import React from 'react'
import Results from './channels-results';

function ChannelsResults(props) {

    console.log("[ChannelsResults] props:", props);

    const { channels } = props;
    if (channels == null || channels.length < 1) {
        return null;
    }


    return (
        <div className="channels-results">
             <Results channels={channels} />
         </div>
    )


}
export default ChannelsResults;