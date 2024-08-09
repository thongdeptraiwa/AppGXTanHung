import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { oStack } from '../../navigations/UserNavigation';

const Home = (props) => {

    const { navigation } = props;

    console.log("Home");
    return (
        <SafeAreaView style={styles.continue}>

            <View>
                <Image
                    style={styles.logo}
                    source={require('../../img/logoTanHung.png')}
                />
                {/* <Image
                    source={{ uri: image }}
                    style={styles.image} /> */}
            </View>

            <View>
                <Text style={styles.title}>Giáo xứ Tân Hưng</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(oStack.QR.name)}>
                    <Text style={styles.txtBtn}>Điểm danh</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    continue: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: "white"
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        color: "black",
        textAlign: "center",
        fontSize: 30,
        marginTop: 30,
        marginBottom: 100
    },
    btn: {
        backgroundColor: 'blue',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        margin: 20,
    },
    txtBtn: {
        color: "white",
        fontSize: 18
    },

})