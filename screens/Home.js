import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text, Button } from '@ui-kitten/components';

export default function Home({ navigation }) {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={styles.container}>
                <View style={styles.introContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} category='h1'>Statistics Canada Energy Graphs!</Text>
                        <Text style={styles.text} category='p1'>This application will showcase 2 graphs that take data from Statistics Canada's energy section.
                            It's important we keep track of this data as it helps us Canadians keep track and better understand
                            statistics about energy use, different types of energy, intakes, etc.
                        </Text>
                    </View>
                    <Button style={{ backgroundColor: '#EE964B', borderColor: '#EE964B' }} onPress={() => navigation.push('Graphs')}>
                        {evaProps => <Text {...evaProps} category='h6' style={{ color: "white" }}>View Graphs</Text>}
                    </Button>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/StatCanadaEnergyBanner.png')}
                    contentFit="fill"
                />
            </View>
        </ApplicationProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    introContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60
    },
    textContainer: {
        gap: 10
    },
    image: {
        width: 400,
        height: 180
    },
    text: {
        padding: 6,
        paddingTop: 0,
        textAlign: 'left'
    }
});
