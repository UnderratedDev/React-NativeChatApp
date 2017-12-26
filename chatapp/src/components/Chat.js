import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
} from 'react-native';

class Chat extends React.Component {

    constructor (props) {
        super (props);
        console.log (this.props.chatname);
    }

    render () {
        return (
            <View>
                <Text>
                    Hello { this.props.chatname }
                </Text>
            </View>
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