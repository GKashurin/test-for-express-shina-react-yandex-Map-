import React, {useEffect, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";
import {Contacts} from "./Contacts";

const App = () => {
    const [items, setItems] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [center, setCenter] = useState([56.841,60.611]);
    useEffect(() => {
        fetch('http://localhost:3000/state.json')
            .then((resp) => resp.json())
            .then(json => {
                const data = json.pickPoints;
                setItems(data);
                let coord = data.map((obj) => {
                   return [obj.latitude, obj.longitude]
                })
                setCoordinates(coord)
            })
    }, [])

	useEffect(() => {
		console.log(center)
	},[center])

	return (
    <YMaps>
        <div className="wrapper">
            <Contacts items={items}
					  setCenter={setCenter}
			/>
            <Map  width='70%'
                  height='100vh'
                  defaultState={{
                      center: center,
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
                {coordinates?.map(coordinate => <Placemark geometry={coordinate}/>)}
                </Clusterer>
            </Map>
        </div>
    </YMaps>
)
}
export default App