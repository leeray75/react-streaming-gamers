import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import StreamInfo from './stream-info';
import include from '@leeray75/react-streaming-gamers/utils/include';

include("https://player.twitch.tv/js/embed/v1.js");


export default class Player extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.player = null;
        console.log("[TwitchPlayer] props:", props);
        require('./twitch-player.scss');
    }

    changeChannel() {
        const { channel, player } = this.props;
        console.log("[TwitchPlayer] changeChannel:", channel);
        player.setChannel(channel.display_name);
    }
    loadPlayer() {
        const { Twitch } = window;
        const { channel, createPlayer, stream } = this.props;

        let playerNode = this.ref.current;

        let width = "100%"; //layerNode.offsetWidth;
        let height = "100%"; //Math.round(playerNode.offsetWidth * .5625);
        const options = {
            width,
            height,
            channel: channel.display_name
        }
        let player = new Twitch.Player(playerNode.id, options);
        player.setVolume(1);
        console.log("[TwitchPlayer] Create:", player);
        window.player = player;
        createPlayer(player, channel, stream);
    }

    handleCloseModal(e) {
        e.preventDefault();
        this.props.destroyPlayer();
    }
    handleModalRendered() {

    }
    componentDidUpdate(prevProps) {
        console.log("[TwitchPlayer] Updated:", this.props);
        const { props } = this;
        const prevDisplayName = prevProps.channel == null ? "" : prevProps.channel.display_name;
        if (props.channel != null && props.channel.display_name != prevDisplayName) {
            if (props.player == null) {
                this.loadPlayer()
            } else {
                this.changeChannel();
            }
        } else if (this.props.player == null && prevProps.player != null) {
            prevProps.player.destroy();
        }
    }
    componentDidMount() {
        console.log("[TwitchPlayer] Mounted:", this.props);
        if (this.props.channel != null) {
            this.loadPlayer()
        }
    }
    render() {
        const { props } = this;
        const { channel, stream } = props;

        const open = props.player != null;


        return (
            <Modal open={open} onClose={this.handleCloseModal.bind(this)} keepMounted={true} onRendered={this.handleModalRendered.bind(this)} disableAutoFocus={true}>
                <div className="twitch-player">
                    <div ref={this.ref} id="twitch-player" className="player-container"></div>
                    <button className="cancel" onClick={this.handleCloseModal.bind(this)}><CancelTwoToneIcon /></button>
                    <StreamInfo stream={stream} />
                </div>
            </Modal>
        )
    }

}