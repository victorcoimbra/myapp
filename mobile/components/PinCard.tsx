import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Card } from '@rneui/themed';

export default function PinCard(props: any) {
    const { title, image } = props
    const [AspectRatio, setAspectRatio] = useState(1)

    useEffect(() => {
        Image.getSize(image, (width, height) => setAspectRatio(width / height))
    }, [])

    return (
        <Card>
            <View style={styles.pin}>
                <View>
                    <Image
                        source={
                            {
                                uri: image
                            }
                        }

                        style={[styles.image, { aspectRatio: AspectRatio }]}
                    />


                    <Pressable onPress={() => { }} style={styles.heartBottom}>
                        <AntDesign name="hearto" size={24} color="black" />
                    </Pressable>

                </View>
                <Card.Divider />

                <Text style={styles.title}>{title}</Text>




            </View>

        </Card>


    );
}

const styles = StyleSheet.create({
    pin: {
        width: "100%"
    },
    image: {
        width: "100%",
        borderRadius: 20,
        aspectRatio: 1 / 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    },
    heartBottom: {
        backgroundColor: "#d3cfd4",
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 20

    }

});
