import React, { useEffect, useState } from "react";
import { NativeMethods } from "react-native";

type Coordinate = {
    x: number;
    y: number;
}

type Layout = {
    coordinate: Coordinate;
    width: number;
    height: number;
}

const defaultCoordinate = { x: 0, y: 0 }

const defaultLayout: Layout = { 
    coordinate: defaultCoordinate, 
    width: 0, 
    height: 0 
}

const useLayout = <T extends NativeMethods>(ref: React.RefObject<T>, children: React.ReactNode) => {
    const [layout,setLayout] = useState<Layout>(defaultLayout)
    
    useEffect(() => {
        if(ref.current) {
            ref.current?.measure((_fx, _fy, width, height, px, py) => {
                setLayout({ 
                    coordinate: { x: px, y: py }, 
                    width: width, 
                    height: height 
                })
            })
        }
    },[children])

    return layout
}

export { defaultLayout,defaultCoordinate,useLayout,Layout,Coordinate }