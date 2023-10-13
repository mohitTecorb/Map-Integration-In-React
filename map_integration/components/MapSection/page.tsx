'use client'
import React from 'react'
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
const MapSection = ({ DemoData, selectedBusiness }: any) => {

    const VenueLocationIcon: any = L.icon({
        iconUrl: '/location.png',
        iconRetinaUrl: '/location.png',
        iconSize: [35, 35],
        className: 'leaflet-venue-icon'
    });

    return (
        <div>
            <MapContainer
                style={{ height: "600px", width: "600px" }}
                center={selectedBusiness?.geometry.coordinates}
                zoom={17}
                maxZoom={20}
                attributionControl={true}
                zoomControl={false}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {DemoData?.features?.map((item: any, index: any) => {
                    return (
                        <Marker
                            key={item.properties.PARK_ID}
                            position={item.geometry.coordinates}
                            icon={VenueLocationIcon}
                        >
                            <Popup>
                                {item.properties.NAME}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default MapSection

