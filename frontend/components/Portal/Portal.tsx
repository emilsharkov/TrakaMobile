import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

interface PortalProps {
    open: boolean;
    children?: React.ReactNode;
}

interface PortalRootProps {
    children?: React.ReactNode;
}

interface PortalContent {
    children: React.ReactNode;
    uuid: string;
}

type PortalContextType = {
    mountPortalsContent: (children: React.ReactNode, uuid: string) => void;
    updatePortalsContent: (children: React.ReactNode, uuid: string) => void;
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
    const { children,open } = props
    const { mountPortalsContent,updatePortalsContent,unmountPortalsContent } = usePortalContext()
    const portalUUID: string = useMemo(() => uuid(),[])

    useEffect(() => {
        return () => unmountPortalsContent(portalUUID)
    },[])

    useEffect(() => {
        open ? mountPortalsContent(children,portalUUID): unmountPortalsContent(portalUUID)
    },[open])

    useEffect(() => {
        if(open) {
            updatePortalsContent(children,portalUUID)
        }
    },[children])
    
    return null
}

const PortalRoot = (props: PortalRootProps) => {
    const { children } = props
    const [portalsContent,setPortalsContent] = useState<PortalContent[]>([])
    
    const mountPortalsContent = (children: React.ReactNode, uuid: string) => {
        setPortalsContent((prevPortalsContent) => [...prevPortalsContent, { children,uuid } ])
    }

    const updatePortalsContent = (children: React.ReactNode, uuid: string) => {
        setPortalsContent((prevPortalsContent) => prevPortalsContent.map((portalContent) => {
            return portalContent.uuid === uuid ? { children,uuid }: portalContent
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
                            style={{ zIndex: index + 1 }}
                            className={`absolute top-0 bottom-0 right-0 left-0`}
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