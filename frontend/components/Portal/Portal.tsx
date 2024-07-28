import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { v4 as uuid } from 'uuid';

interface PortalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

interface PortalContent {
    children: React.ReactNode;
    uuid: string;
}

type PortalContextType = {
    mountPortalContent: (children: React.ReactNode, uuid: string) => void;
    unmountPortalContent: (uuid: string) => void;
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
    const { children,open } = props
    const { mountPortalContent,unmountPortalContent } = usePortalContext()
    const portalUUID = useMemo(() => uuid(),[])
    
    useEffect(() => {
        return () => unmountPortalContent(portalUUID)
    },[])

    useEffect(() => {
        open ? mountPortalContent(children,portalUUID): unmountPortalContent(portalUUID)
    },[open])
    
    return null
}

const PortalRoot = () => {
    const [portalsContent,setPortalsContent] = useState<PortalContent[]>([])

    const mountPortalContent = (children: React.ReactNode, uuid: string) => {
        const portalContent: PortalContent = { children,uuid }
        setPortalsContent([...portalsContent,portalContent])
    }

    const unmountPortalContent = (uuid: string) => {
        const portalsContentWithoutUUID: PortalContent[] = portalsContent.filter((portalsContent) => portalsContent.uuid !== uuid)
        setPortalsContent(portalsContentWithoutUUID)
    }

    return (
        <PortalContext.Provider value={{mountPortalContent,unmountPortalContent}}>
            <View className="flex-1">
                {portalsContent.map((portalContent: PortalContent, index: number) => {
                    return (
                        <View 
                            className={`absolute top-0 bottom-0 right-0 left-0 z-${index}`}
                            key={portalContent.uuid}
                        >
                            {portalContent.children}
                        </View>
                    )
                })}
            </View>
        </PortalContext.Provider>
    )
}

export { Portal, PortalRoot }