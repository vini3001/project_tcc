'use client'

import { HeaderText } from "@/app/global/styles/style";
import { VictoryArea, VictoryAxis, VictoryBar, VictoryCursorContainer, VictoryLabel, VictoryLine, VictoryPie, VictoryPolarAxis, VictoryScatter, VictoryStack, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { VictoryChart } from "victory-chart";


export default function Home() {
    const sampleData = [
        { x: 1, y: 2},
        { x: 2, y: 3},
        { x: 3, y: 5},
        { x: 4, y: 4},
        { x: 5, y: 6}
      ]

    return (
        <div>
            <HeaderText>Painel de controle</HeaderText>

            <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-[1px]">
                <VictoryChart theme={VictoryTheme.material} height={200} containerComponent={
                <VictoryVoronoiContainer
                labels={({datum}) => `${datum.x}, ${datum.y}`}
                />}>
                    <VictoryAxis
                        dependentAxis
                        style={{
                        tickLabels: { fontSize: 6 }
                    }}/>

                    <VictoryAxis
                        style={{
                        grid: { stroke: 'transparent' },
                        tickLabels: { fontSize: 6 }
                    }} />

                    <VictoryScatter
                    
                    style={{data: {strokeWidth: 1, fill: 'black', stroke: 'black', strokeLinecap: 'round', cursor: 'pointer', position: 'absolute'}, labels: {fontSize: 7}}} data={sampleData}
                    events={[{
                        target: 'data',
                        eventHandlers: {
                            onMouseOver: () => {
                                return [{
                                    eventKey: 'all',
                                    mutation: (props) => {
                                        const fill = props.style && props.style.fill
                                        return fill === 'orange' ? null : {style: {fill: 'orange', cursor: 'pointer'}}
                                    }
                                }]
                            }
                        }
                    }]}
                    />
                </VictoryChart>

                <VictoryChart polar
                domain={{ y: [0, 7]}}
                theme={VictoryTheme.material}
                height={200}
                containerComponent={
                    <VictoryVoronoiContainer
                    labels={({datum}) => `${datum.x}, ${datum.y}`}
                />}
                >
                <VictoryPie
                data={sampleData}
                />
                <VictoryPolarAxis
                    style={{tickLabels: {opacity: 0}}}
                />

                <VictoryLine
                    data={sampleData}
                    style={{
                    data: { stroke: "#c43a31" },
                    }}
                />
                </VictoryChart>
            </div>    
        </div>
    )
}