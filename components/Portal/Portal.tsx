import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

interface PortalProps {
    open: boolean;
    children?: React.ReactNode;
    top?: number;
    left?: number;
}

interface PortalRootProps {
    children?: React.ReactNode;
}

interface PortalContent {
    children: React.ReactNode;
    uuid: string;
    top: number;
    left: number;
}

type PortalContextType = {
    mountPortalsContent: (children: React.ReactNode, uuid: string, top?: number, left?: number) => void;
    updatePortalsContent: (children: React.ReactNode, uuid: string, top?: number, left?: number) => void;
    unmountPortalsContent: (uuid: string) => void;
}

const PortalContext = React.createContext<PortalContextType | null>(null)

const usePortalContext = () => {
    const context = React.useContext(PortalContext)

    if (!context) {
      throw new Error("usePortalContext must be used within a <PortalRoot />")
    }
  
    return context
}

const Portal = (props: PortalProps) => {
    const { open,top,left,children } = props
    const { mountPortalsContent,updatePortalsContent,unmountPortalsContent } = usePortalContext()
    const portalUUID: string = useMemo(() => uuid(),[])

    useEffect(() => {
        return () => unmountPortalsContent(portalUUID)
    },[])

    useEffect(() => {
        open ? mountPortalsContent(children,portalUUID,top,left): unmountPortalsContent(portalUUID)
    },[open])

    useEffect(() => {
        if(open) {
            updatePortalsContent(children,portalUUID,top,left)
        }
    },[children])
    
    return null
}

const PortalRoot = (props: PortalRootProps) => {
    const { children } = props
    const [portalsContent,setPortalsContent] = useState<PortalContent[]>([])
    
    const mountPortalsContent = (children: React.ReactNode, uuid: string, top: number = 0, left: number = 0) => {
        const newPortalContent = { children, uuid, top , left }
        setPortalsContent((prevPortalsContent) => [...prevPortalsContent, newPortalContent ])
    }

    const updatePortalsContent = (children: React.ReactNode, uuid: string, top: number = 0, left: number = 0) => {
        const newPortalContent = { children, uuid, top, left }
        setPortalsContent((prevPortalsContent) => prevPortalsContent.map((portalContent) => {
            return portalContent.uuid === uuid ? newPortalContent: portalContent
        }))
    }

    const unmountPortalsContent = (uuid: string) => {
        setPortalsContent((prevPortalsContent) => prevPortalsContent.filter((portalContent) => {
            return portalContent.uuid !== uuid
        }))
    }

    return (
        <PortalContext.Provider value={{mountPortalsContent,updatePortalsContent,unmountPortalsContent}}>
            <View className="flex-1">
                <View className="flex-1 z-0">
                    {children}
                </View>
                {portalsContent.map((portalContent: PortalContent, index: number) => {
                    return (
                        <View
                            key={portalContent.uuid}
                            className={`absolute bottom-0 right-0`}
                            style={{ 
                                top: portalContent.top,
                                left: portalContent.left,
                                zIndex: index + 1, 
                            }}
                        >
                            {portalContent.children}
                        </View>
                    )
                })}
            </View>
        </PortalContext.Provider>
    )
}

export { Portal, PortalRoot, PortalProps, PortalRootProps }