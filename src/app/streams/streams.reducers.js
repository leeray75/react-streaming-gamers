
function getDefaultState() {
    const DEFAULT_STATE = []
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const Streams = (state = [], action) => {
    let newState = [];
    
    const { type } = action;

    switch (type) {
        case 'STREAMS:UPDATE':
            const { streams } = action;

            newState = streams;
            break;
        default:
            newState = state;
    }

    //console.log("[MediaPlayer Reducers] newState",newState);
    PREV_STATE = newState;
    return newState;
}

export default Streams;

