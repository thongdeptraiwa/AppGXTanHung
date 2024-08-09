import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const Camera = () => {
    const [image, setImage] = useState(null);
    // upload ảnh lên cloudinary
    const uploadImage = async (image) => {
        try {
            const data = new FormData();
            data.append('file', {
                uri: image.uri,
                type: image.type,
                name: image.fileName,
                fileName: image.fileName,
            });
            data.append('upload_preset', 'nvkc2dfw');
            axios({
                url: 'https://api.cloudinary.com/v1_1/dkhvbzurh/image/upload',
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                Authorization: '',
            }).then((res) => {
                console.log('uploadImage -> ', res.data)
            }).catch((error) => {
                console.log('uploadImage -> ', error);
            });
            console.log(image);
        } catch (error) {
            console.log('uploadImage -> ', error);
        }
    };

    // hàm chụp ảnh
    const onOpenLibrary = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                }
                else {
                    console.log('response -> ', response);
                    setImage(response.assets[0].uri);
                    // upload
                    await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };

    // hàm thu vien
    const onOpenCamera = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchCamera(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                }
                else {
                    console.log('response -> ', response);
                    setImage(response.assets[0].uri);
                    // upload
                    await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };
    return (
        <View style={styles.container}>
            {
                image ? <Image
                    source={{ uri: image }}
                    style={styles.image} /> :
                    <View style={styles.placeholder}></View>
            }
            <TouchableOpacity onPress={onOpenCamera} style={styles.btn}>
                <Text style={styles.label}>Chụp hình</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpenLibrary} style={styles.btn}>
                <Text style={styles.label}>Thư viện</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Camera

const styles = StyleSheet.create({
    placeholder: {
        width: 200,
        height: 200,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    btn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

})