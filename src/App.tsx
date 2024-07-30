import '@openglobus/openglobus-react/dist/style.css'
import { Globe, GlobeContextProvider, Vector } from '@openglobus/openglobus-react'
import { Bing, GlobusTerrain, math } from '@openglobus/og'

function App() {
    let globe = 
        <Globe
            layers={[new Bing("")]}
            terrain={new GlobusTerrain()}
            atmosphereEnabled={true}
            fontsSrc="https://openglobus.org/examples/examples/fonts/fonts">
        </Globe>

    let vec = Vector({
        name: "LinesCircles",
        pickingScale: 1,
        pickingEnabled: true,
        scaleByDistance: [1.0, math.MAX32, 1.0],
        relativeToGround: false
    });

    //globe.props.layers.addLayer(vec);
    console.log(globe);

    return <GlobeContextProvider>{globe}</GlobeContextProvider>
}

export default App
