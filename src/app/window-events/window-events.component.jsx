import React, { Component } from 'react';


export default class WindowEvents extends Component {
    constructor(props) {
        super(props);
        console.log("[Window] props:", props);
    }
    initEvents() {
        const { window } = this.props;
        window.addEventListener('blur', e => {
            this.props.onBlur(e);
        })
        window.addEventListener('focus', e => {
            this.props.onFocus(e);
        })
    }

    componentDidMount() {
        this.initEvents();
    }
    render() {
        return this.props.children;
    }
}