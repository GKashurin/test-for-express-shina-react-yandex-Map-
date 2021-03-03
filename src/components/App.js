import React, {useEffect, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import {Contacts} from "./Contacts";

const App = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/state.json')
            .then((resp) => resp.json())
            .then(json => {setItems(json.pickPoints)})

    }, [])
    let coord = items.map((obj) => [
        [obj.latitude, obj.longitude]
    ])

    console.log(coord)

    let coordinates = [
        [56.80245, 60.604913],
        [56.708415, 60.975993]
    ];

	return (
    <YMaps>
        <div className="wrapper">
            <Contacts items={items}/>
            <Map  width='70%'
                  height='100vh'
                  defaultState={{
                      center: [56.841,60.611],
                      zoom: 11,
                      controls: ['zoomControl', 'fullscreenControl'],
                  }}
                  modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Clusterer
                    options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                    }}
                >
                {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                </Clusterer>
            </Map>
        </div>
    </YMaps>
)
}
export default App