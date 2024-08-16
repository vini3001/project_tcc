'use client'

import { HeaderText } from "@/app/global/styles/style";
import { VictoryArea, VictoryAxis, VictoryBar, VictoryCursorContainer, VictoryLabel, VictoryLine, VictoryPie, VictoryPolarAxis, VictoryScatter, VictorySharedEvents, VictoryStack, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { VictoryChart } from "victory-chart";
import { CustomLabelPaginate } from '../../global/styles/style';


export default function Home() {
    const sampleData = [
        { x: 1, y: 2, label: '1'},
        { x: 2, y: 3, label: '2'},
        { x: 3, y: 5, label: '3'},
        { x: 4, y: 4, label: '4'},
        { x: 5, y: 6, label: '5'}
      ]

    return (
        <div>
            <HeaderText>Highlights</HeaderText>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-[1px]">
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
                name="line"
                style={{data: {strokeWidth: 1, fill: 'black', stroke: 'black', strokeLinecap: 'round', cursor: 'pointer', position: 'absolute'}, labels: {fontSize: 7}}} data={sampleData}
                />
            </VictoryChart>

            <VictoryChart polar
            domain={{ y: [0, 7]}}
            theme={VictoryTheme.material}
            height={200}
            >
            <VictoryPie
            name="pie"
            data={sampleData}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            style={{labels: {opacity: 0}}}
            />
            <VictoryPolarAxis
                style={{ grid: {stroke: 'transparent'}}}
            />
            </VictoryChart>

            <svg className="col-span-2" viewBox="-60 0 900 350">
            <VictorySharedEvents
                events={[{
                    childName: ["pie", "bar"],
                    target: "data",
                    eventHandlers: {
                      onMouseOver: () => {
                        return [{
                          childName: ["pie", "bar"],
                          mutation: (props) => {
                            return {
                              style: Object.assign({}, props.style, {fill: "blue", stroke: 'white'})
                            };
                          }
                        }];
                      },
                      onMouseOut: () => {
                        return [{
                          childName: ["pie", "bar"],
                          mutation: () => {
                            return null;
                          }
                        }];
                      }
                    }
                  }]}
                >
                
                <g transform={"translate(450, -20)"}>
                  <VictoryBar
                  name="bar"
                  standalone={false}
                  style={{labels: { fontSize: 18 }}}
                  labels={() => {return sampleData.map((item) => {return item.label})}}
                  theme={VictoryTheme.material}
                  height={350}
                  data={sampleData}
                  />
                </g>

                <g transform={"translate(-70, -20)"}>
                    <VictoryPie
                    name="pie"
                    standalone={false}
                    style={{labels: { fontSize: 18 }, data: {fontSize: 10}}}
                    theme={VictoryTheme.grayscale}
                    height={350}
                    data={sampleData}
                    />
                </g>
                </VictorySharedEvents>
            </svg>
            </div>
        </div>    
    )
}