import React, { useEffect, useState } from 'react';
import "../../src/css/style_lokalizacja.css";

const MapComponent = ({ mapLoaded, setMapLoaded }) => {
    useEffect(() => {
        if (!mapLoaded) {
            const script = document.createElement('script');
            script.src = 'https://1map.com/js/script-for-user.js?embed_id=968209';
            script.async = true;
            script.onload = () => {
                window.OneMap.initMap({
                    query: 'Lubichowska 91, Starogard Gdański, Polska',
                    width: '100%',
                    height: 600,
                    satellite: false,
                    zoom: 13,
                    placeId: 'ChIJ_XN7dGibAkcRtJx1rRZOL2Y',
                    cid: '0x662f4e16ad759cb4',
                    coords: [53.9546723, 18.5175941],
                    lang: 'pl',
                    queryString: 'Lubichowska 91, Starogard Gdański, Polska',
                    centerCoord: [53.9546723, 18.5175941],
                    id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
                    embed_id: '968209',
                });
                setMapLoaded(true);
            };

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [mapLoaded, setMapLoaded]);

    return (
        <div className="map">
            <div id="map">
                <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                    <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                    <a href="https://1map.com/pl/map-embed"></a>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;
