import { StackedBarChart } from "react-native-chart-kit";
import { View, Dimensions } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';

const screenWidth = Dimensions.get('window').width;

export default function Stacked() {
    const data = {
        labels: ["2020", "2021", '2022'],
        legend: ["Oil sands expenses", "Oil and gas extraction expenses	", "Total operating expenses"],
        data: [
            [18427, 29710, 33263],
            [29709, 24738, 54448],
            [33263, 30043, 63305],
            [21812, 23874, 45686],
            [23811, 23083, 46894]
        ],
        barColors: ["#000000", "#656565", "#C1C1C1"]
    };

    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        color: (opacity = 1) => `rgba(37, 37, 37, ${opacity})`, // under chart color
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //labels
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        // propsForLabels: { fill: "transparent", },
        propsForHorizontalLabels: {
            fontSize: 11,
        }

    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View>
                <Text category='h5'>Oil and Gas Extraction Capital Expenses</Text>
                <Text category='p1' style={{ marginBottom: 30 }}>Line Chart</Text>
                <StackedBarChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    decimalPlaces={0}
                />
                <Text>This stacked bar chart shows us the Total operating expense of Oil, Gas, and Oil Sands, the Oil and gas extraction expenses, Oil sands expenses in the years 2018, 2019, 2020, 2021, and 2022.</Text>
            </View>
        </ApplicationProvider>
    )
}