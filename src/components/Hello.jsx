import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';


// eslint-disable-next-line react/function-component-definition
function Hello(props) {
    const { children } = props;
    return (
        <View>
            <Text style={styles.text}>
                {`Hello ${children}`}
            </Text>
        </View>
    );
}

Hello.propTypes = {
    children: string.isRequired,
};

const styles = StyleSheet.create ({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});

export default Hello;