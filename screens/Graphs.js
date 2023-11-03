import { StyleSheet, View, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import LineChart from '../components/LineChart'
import StackedBarChart from '../components/StackedBarChart' //fix this from '../components/StackedBarChart';

export default function Graphs({ navigation }) {

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.lineChartContainer}>
                        <LineChart />
                    </View>
                    <View style={styles.lineChartContainer}>
                        <StackedBarChart />
                    </View>
                </View>
            </ScrollView>
        </ApplicationProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    lineChartContainer: {
        margin: 10,
        paddingLeft: 20,
      
    }
});
