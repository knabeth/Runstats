import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';

export default class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            athletes: null
        }
    }

    componentDidMount() {
        let config = {
            apikey: 'a057dc9b7a65e0ec3df0b2ab98ee0ec4',
        }

        axios.get('https://api.triathlon.org/v1/athletes?per_page=50', {headers: config})
            .then((response) => {
                console.log(response.data.data.length);
                this.setState({
                    athletes: response.data.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const ATHLETES = this.state.athletes && this.state.athletes.map(function (athlete, key) {

                return <Text key={key}>{athlete.athlete_title}</Text>;

            });
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <View style={{alignItems: 'center'}}>
                        {ATHLETES}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        flex: 1,
        backgroundColor: '#fff'
    },
});
