import React from 'react';
import PropTypes from 'prop-types';

import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {

    state = {
        messages : []
    }

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <GiftedChat
                messages = { this.state.messages }
                onSend   = { (message) => {
                    // send message to your backend
                    console.log (message);
                }}
                user     = {
                    {
                        _id  : 1,
                        name : this.props.name
                    }
                }
            />
        );
    }
}

Chat.defaultProps = {
    chatname : 'Yudhvir',
};

Chat.propTypes = {
    chatname : PropTypes.string
}

export default Chat;