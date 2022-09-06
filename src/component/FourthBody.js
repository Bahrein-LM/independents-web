import React, { useCallback, useState } from 'react';
import '../style/Body.css';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { AiFillHeart } from 'react-icons/ai';
const FourthBody = () => {


    const center = {
        lat: -7.9777145,
        lng: 112.6615385};

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDuvSASBvsmDk2FK6VNRw2PZJdeBuyzzUk"
      })
      // eslint-disable-next-line
      const [map, setMap] = useState(null);

      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
        // eslint-disable-next-line
      }, [])
     
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])

    return isLoaded ? 
            <div className='fourthBody' id='maps'>
                <h1 className='titleFourth'>Maps</h1>
                <GoogleMap zoom={9} center={center} 
                mapContainerClassName="fourthMaps" 
                onLoad={onLoad} 
                onUnmount={onUnmount}>
                    <Marker position={center} />
                </GoogleMap>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,64L30,85.3C60,107,120,149,180,181.3C240,213,300,235,360,213.3C420,192,480,128,540,138.7C600,149,660,235,720,229.3C780,224,840,128,900,80C960,32,1020,32,1080,80C1140,128,1200,224,1260,229.3C1320,235,1380,149,1410,106.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
                <h5 className='footer'>created with <a href='https://www.instagram.com/bahrein_lm/'><AiFillHeart className='iconColors'/></a> by @bahren_lm </h5>
            </div> 
            : <></>;

}

export default FourthBody;
