'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
const MapSection = ({ businessData, selectedBusiness }: any) => {
    const [buttonArr, setButtonArr] = useState([{ status: "red", id: 1, isActive: true }, { status: "yellow", id: 2, isActive: false }, { status: "green", id: 3, isActive: false }])
    const [activeMap, setActiveMap] = useState(buttonArr[0])
    const [filterData, setFilterData] = useState({ "features": [] })
    const [filterSelectData, setFilterSelectData] = useState(selectedBusiness)

    useEffect(() => {
        let newArr = businessData?.features?.filter((it: any) => {
            if (it.type == activeMap?.status) {
                return { ...it }
            }
        })
        let formetData = { "features": newArr }
        setFilterData(formetData)
        if (newArr?.length > 0) {
            setFilterSelectData(formetData?.features[0])
        }
        // setFilterSelectData(newArr?.features[0])
    }, [activeMap])
    const handleLocationColor = () => {
        if (activeMap.status == "red") {
            return '/location.png'
        } else if (activeMap.status == "yellow") {
            return '/locationYellow.png'
        } else {
            return '/locationGreen.png'
        }

    }

    const VenueLocationIcon: any = L.icon({
        iconUrl: handleLocationColor(),
        iconRetinaUrl: '/location.png',
        iconSize: [35, 35],
        className: 'leaflet-venue-icon'
    });
    const handleActive = (data: any) => {
        setActiveMap(data)
        let newArr = buttonArr?.map((items: any) => {
            if (items?.id == data.id) {
                return { ...items, isActive: true }
            } else {
                return { ...items, isActive: false }
            }
        })
        setButtonArr(newArr)
    }
    const handleLogo = (data: any) => {
        console.log(data);

        if (data.type == "red") {
            const VenueLocationIcon: any = L.icon({
                iconUrl: '/location.png',
                iconRetinaUrl: '/location.png',
                iconSize: [35, 35],
                className: 'leaflet-venue-icon'
            })
            return VenueLocationIcon
        } else if (data.type == "yellow") {
            const VenueLocationIcon: any = L.icon({
                iconUrl: '/locationYellow.png',
                iconRetinaUrl: '/locationYellow.png',
                iconSize: [35, 35],
                className: 'leaflet-venue-icon'
            })
            return VenueLocationIcon
        } else {
            const VenueLocationIcon: any = L.icon({
                iconUrl: '/locationGreen.png',
                iconRetinaUrl: '/locationGreen.png',
                iconSize: [35, 35],
                className: 'leaflet-venue-icon'
            })
            return VenueLocationIcon
        }
    }

    return (
        <div className=''>
            <div className='my-5'>
                {buttonArr?.map((item: any) => {
                    return <button key={item?.id}
                        className={`w-20 h-10 rounded-md bg-slate-200 mx-5 hover:bg-blue-500 ${item.isActive && "bg-slate-400"}`}
                        style={{ color: item.status }}
                        onClick={() => { handleActive(item) }}
                    >{item?.status}</button>
                })}
            </div>
            <MapContainer
                style={{ height: "500px", width: "600px" }}
                center={selectedBusiness?.geometry.coordinates}
                zoom={10}
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
                {filterData?.features?.map((item: any, index: any) => {
                    console.log("filterData", item);

                    return (
                        <Marker
                            key={item.properties.PARK_ID}
                            position={item.geometry.coordinates}
                            // icon={VenueLocationIcon}
                            icon={handleLogo(item)}

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

