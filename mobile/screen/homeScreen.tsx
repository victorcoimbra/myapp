import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Pin from '../components/Pin';
import PinCard from '../components/PinCard';

export default function HomeScreen() {
    return (

        <ScrollView>
            <View style={styles.container}>
            <PinCard image={"https://cdn2.thecatapi.com/images/bdd.jpg"} title={"My Cat"} />
            <PinCard image={"https://cdn2.thecatapi.com/images/4nc.jpg"} title={"My Cat"} />
            <PinCard image={"https://cdn2.thecatapi.com/images/9ea.jpg"} title={"My Cat"} />
            

                {/* <Pin image={"https://cdn2.thecatapi.com/images/4nc.jpg"} title={"My Cat"} />
                <Pin image={"https://cdn2.thecatapi.com/images/bdd.jpg"} title={"My Cat"} />
                <Pin image={"https://cdn2.thecatapi.com/images/9ea.jpg"} title={"My Cat"} />
                <Pin image={"https://cdn2.thecatapi.com/images/4nc.jpg"} title={"My Cat"} /> */}
            </View>

        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10

    },
});
