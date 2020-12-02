import React from 'react'
import Results from './follows-results';

function UsersFollowsResults(props) {

    console.log("[UsersFollowsResults] props:", props);

    const { follows, streams } = props;
    if (follows == null || follows.length < 1) {
        return null;
    }


    return (
        <div className="results">
             <Results follows={follows} streams={streams} />
         </div>
    )


}
export default UsersFollowsResults;