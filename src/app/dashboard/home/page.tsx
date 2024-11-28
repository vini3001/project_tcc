'use client'

import { VictoryAxis, VictoryBar, VictoryPie, VictoryPolarAxis, VictoryScatter, VictorySharedEvents, VictoryTheme, VictoryVoronoiContainer } from "victory";
import { VictoryChart } from "victory-chart";
import { HeaderDashboard, HomeContainer, InfoContainer } from "./styles";
import { useState } from "react";
import { useQuery } from "react-query";
import { routeGetDashboardInfo } from "@/backend/dashboard";
import { DashboardInfo } from "@/app/entities/Dashboard";
import { Loading } from "@/app/components/Loading";

export default function Home() {
  const [dashInfo, setDashInfo] = useState<DashboardInfo>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
    useQuery({
      queryKey: 'dashboardInfo',
      queryFn: async () => {
          setIsLoading(true)
  
          const response = await routeGetDashboardInfo.request({}).then((response) => {
            // @ts-ignore
            if(response.data !== undefined && response.data!.tagsComContagem.length !== 0) {
              setDashInfo(response.data)
              setIsLoading(false)
            }
          })

          return response
      },
      refetchOnWindowFocus:false
    })

    return (
        <div className="h-full">
          {!isLoading ? 
          <div className="flex flex-col gap-3">
          <InfoContainer className="flex flex-col overflow-hidden">
          <HeaderDashboard>
            <h3>Informações Gerais</h3>
          </HeaderDashboard>
          <div className="flex flex-col items-start p-[10px]">
            <h5>Total de Contatos: {dashInfo?.qtdContatos}</h5>
            <h5>Total de Mensagens: {dashInfo?.qtdMensagens}</h5>
          </div>
          </InfoContainer>

          <HomeContainer className="w-full">
          <HeaderDashboard>
            <h3>Estatísticas</h3>
          </HeaderDashboard>
            <svg viewBox="-60 0 1200 350">
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
                
                <g transform={"translate(650, 10)"}>
                  <VictoryBar
                  name="bar"
                  standalone={false}
                  style={{labels: { fontSize: 16 }, data: {fontSize: 20}}}
                  barRatio={0.9}
                  theme={VictoryTheme.material}
                  height={350}
                  labels={dashInfo?.tagsComContagem.map((item) => {
                    return item.tag
                  })}
                  data={dashInfo?.tagsComContagem.map((item) => {
                    return {
                      x: item.tag,
                      y: item.qtd_contatos
                    }
                  })}
                  />
                </g>

                <g transform={"translate(10, 10)"}>
                    <VictoryPie
                    name="pie"
                    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                    standalone={false}
                    style={{labels: { fontSize: 18 }, data: {fontSize: 10}}}
                    theme={VictoryTheme.material}
                    height={350}
                    data={dashInfo?.tagsComContagem.map((item) => {
                      return {
                        x: item.tag,
                        y: item.qtd_contatos
                      }
                    })}
                    />
                </g>
                </VictorySharedEvents>
            </svg>
          </HomeContainer>
            </div> : <Loading isLoading={true} />}
        </div>    
    )
}