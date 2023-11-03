import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

export default function Line() {
    const data = {
        labels: ["March", "April", "May", "June", "July"],
        datasets: [
            {
                data: [
                    178426,
                    172683,
                    164929,
                    173715,
                    169406,
                ],
                color: (opacity = 1) => `rgba(37, 37, 37, ${opacity})`, // Color of points inside
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Coal Coke Production"] // optional
    };

    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(37, 37, 37, ${opacity})`, // under chart color
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //labels
        strokeWidth: 2,
        useShadowColorFromDataset: false,
        style: {
            backgroundColor: 'white',
            borderRadius: 16,
        },
        propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: 'black', //stroke colors
        }

    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View>
                <Text category='h5'>Coal Coke Plant, Monthly Statistics 2023</Text>
                <Text category='p1'>Line Chart</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                        marginVertical: 8,
                        borderRadius: 15,
                    }}
                />
                <Text>This line chart shows us how much Coal Coke was produced from the months March to July in 2023.</Text>
            </View>
        </ApplicationProvider>
    )
}