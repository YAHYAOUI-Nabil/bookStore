import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  return (
    <div>
        <GoogleMapReact
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
                style={{height: '800px', width:'500px'}}>
            
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Google Map'}
                />
            </GoogleMapReact>
    </div>
  )
}

export default Map