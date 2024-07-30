import React, { useEffect, useState } from "react";
import { NativeMethods } from "react-native";

type Layout = {
    x: number;
    y: number;
    width: number;
    height: number;
}

const useLayout = <T extends NativeMethods>(ref: React.RefObject<T>, children: React.ReactNode) => {
    const [layout,setLayout] = useState<Layout>({ x: 0, y: 0, width: 0, height: 0 })
    
    useEffect(() => {
        if(ref.current) {
            ref.current?.measure((fx, fy, width, height, px, py) => {
                setLayout({
                    x: fx,
                    y: fy,
                    width: width,
                    height: height
                })
            })
        }
    },[children])

    return layout
}

export { useLayout,Layout }