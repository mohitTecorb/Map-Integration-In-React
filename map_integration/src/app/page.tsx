'use client'
import { Fragment, useState } from "react";
import MapSection from "../../components/MapSection/page";
export default function Home() {
 
  const DemoData = {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 960,
          "NAME": "TecOrb Technologies",
          "DESCRIPTIO": "Flat asphalt surface, 5 components"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.626690, 77.385849]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1219,
          "NAME": "Logix city center noida",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.5742969, 77.3541167]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1220,
          "NAME": "Indore MP",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [22.719568, 75.857727]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1221,
          "NAME": "RedFort Delhi India",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.632430, 77.218790]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1223,
          "NAME": "Greater Noida",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.458561, 77.492809]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1224,
          "NAME": "Faridabad up",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.403009, 77.307291]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "PARK_ID": 1225,
          "NAME": "Gurugram India",
          "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [28.464598, 77.029701]
        }
      }
    ]
  }
  const [selectedBusiness, setSelectedBusiness] = useState(DemoData?.features[0])
  return (
    <div>
      <div className='text-center text-2xl mt-10'>
        Map Integration In Next.Js
      </div>
      <div className="flex justify-between mx-10 border border-slate-400  h-[600px]">
        <div className="ml-20">
          <h1 className="text-2xl font-bold">Business List</h1>
          <div>
            <ol className="border border-slate-400 mt-10">
              {DemoData?.features?.map((item: any, index: any) => {
                return (
                  <Fragment key={index} >
                    <li 
                    className={`border border-slate-200 p-4 cursor-pointer ${item?.properties?.PARK_ID == selectedBusiness?.properties.PARK_ID ? "bg-slate-200" : "" }`}
                    onClick={()=>{setSelectedBusiness(item)}}
                    >{item.properties.NAME}</li>
                  </Fragment>
                )
              })}
            </ol>
          </div>
        </div>
        <div className="">
          <MapSection DemoData={DemoData} selectedBusiness={selectedBusiness} />
        </div>
      </div>
    </div>
  )
}
