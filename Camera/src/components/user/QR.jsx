import React, { Component, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View,
    SafeAreaView,
    Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { oStack } from '../../navigations/UserNavigation';

const QR = (props) => {

    const { navigation } = props;

    const [trangThai, setTrangThai] = useState("");
    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
        console.log(e.data.toString());
        alert("Điểm danh thành công")
        setTrangThai("Thành công");
        navigation.navigate(oStack.Home.name);
    };
    console.log("QR");

    return (

        <QRCodeScanner
            onRead={this.onSuccess}
            //đèn
            //flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <View style={styles.viewTxt}>
                    <Text style={styles.title}>
                        {/* Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code. */}
                        Điểm danh giáo lý
                    </Text>
                    <Text style={styles.trangThai}>
                        {trangThai}
                    </Text>
                </View>
            }
        // bottomContent={
        //     <TouchableOpacity style={styles.buttonTouchable}>
        //         <Text style={styles.buttonText}>OK. Got it!</Text>
        //     </TouchableOpacity>
        // }
        />

    )
}

export default QR

const styles = StyleSheet.create({
    continue: {
        //flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // centerText: {
    //     flex: 1,
    //     fontSize: 18,
    //     padding: 32,
    //     color: '#777'
    // },
    //new
    viewTxt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#777'
    },
    trangThai: {
        fontSize: 25,
        color: 'blue',
        fontWeight: 'bold',
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})