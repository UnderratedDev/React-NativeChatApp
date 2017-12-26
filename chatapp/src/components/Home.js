import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

class Home extends React.Component {
    state = {
        name : '',
    }

    render () {
        return (
            <View>
                <Text style = { styles.title }>
                    Enter your name :
                </Text>
                <TextInput
                    style = { styles.nameInput }
                    placeholder = 'Yudhvir Raj'
                    onChangeText = { (text) => {
                        this.setState ({
                            name : text
                        });
                    }}
                    value = { this.state.name }
                />
                <TouchableOpacity onPress = { () => {
                    // navigate to the second screen, and to pass it the name
                    // debugger;, breakpoint
                    console.log (this.state.name);
                    Actions.chat ({
                        chatname : this.state.name
                    });
                }}>
                    <Text style = { styles.buttonText }>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    title : {
        marginTop  : 20,
        marginLeft : 20,
        fontSize   : 20,
    },
    nameInput : {
        padding     : 5,
        height      : 40,
        borderWidth : 2,
        borderColor : 'black',
        margin      : 20
    },
    buttonText : {
        marginLeft : 20,
        fontSize   : 20,
    }
})

export default Home;