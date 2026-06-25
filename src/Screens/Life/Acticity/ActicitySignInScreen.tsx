import {StyleSheet, View,Text,TouchableOpacity} from "react-native";

import { BarcodeScanner, CameraView } from '@pushpendersingh/react-native-scanner';
import {useState} from "react";

function ActicitySignInScreen() {


    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState('');

    const startScanning = async () => {
        try {
            setScanning(true);
            await BarcodeScanner.startScanning((barcodes) => {
                console.log('Barcodes detected:', barcodes);
                if (barcodes.length > 0) {
                    const barcode = barcodes[0];
                    setResult(`${barcode.type}: ${barcode.data}`);
                }
                stopScanning();
            });
        } catch (error) {
            console.error('Failed to start scanning:', error);
        }
    };

    const stopScanning = async () => {
        try {
            await BarcodeScanner.stopScanning();
            setScanning(false);
        } catch (error) {
            console.error('Failed to stop scanning:', error);
        }
    };

    return(<View style={{flex:1,backgroundColor:'#F7F7F7'}}>

        <CameraView style={styles.camera} />

        <View style={styles.controls}>
            <TouchableOpacity
                style={styles.button}
                onPress={scanning ? stopScanning : startScanning}
            >
                <Text style={styles.buttonText}>
                    {scanning ? 'Stop Scanning' : 'Start Scanning'}
                </Text>
            </TouchableOpacity>

            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>{result}</Text>
                </View>
            )}
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    controls: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 16,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 16,
        borderRadius: 8,
    },
    resultText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ActicitySignInScreen
