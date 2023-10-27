import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { carouselData } from '../../src/util/data/carouselData/CarouselData';


const { width } = Dimensions.get('window');



const Banner = () => {
    const renderItem = data => (
        <TouchableOpacity key={data.coverImageUri} style={styles.cardContainer} activeOpacity={1} onPress={() => {
            Alert.alert(data._id)
        }}>
            <View style={styles.cardWrapper}>
                <Image style={styles.card} source={data.coverImageUri} />
                <View style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor },]}>
                    <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={carouselData}
                loop
                autoplay
            />
        </View>
    );
};
export default Banner

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        marginTop: 5,
    },
    cardWrapper: {
        borderRadius: 0,
        overflow: 'hidden',
        elevation: 5
    },
    card: {
        width: width * 1,
        height: width * 0.4,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 0,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});



