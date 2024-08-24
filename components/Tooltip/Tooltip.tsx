import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import { Dimensions, Touchable, TouchableOpacity, View } from "react-native";
import { cn } from "@/utils/classNameUtils";
import { Coordinate, defaultCoordinate, defaultLayout, Layout, useLayout } from "../Portal/useLayout";

type TooltipPlacement = 'up' | 'down' | 'right' | 'left'

interface TooltipProps {
    placement?: TooltipPlacement;
    children?: React.ReactNode;
    offset?: number;
}

interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof View> {}

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof View> {}

type TooltipContextType = {
    open: boolean;
    contentCoordinate: Coordinate;
    setOpen: (open: boolean) => void;
    setTriggerLayout: (triggerLayout: Layout) => void;
    setContentLayout: (contentLayout: Layout) => void;
}

const TooltipContext = React.createContext<TooltipContextType | null>(null)

const useTooltipContext = () => {
    const context = React.useContext(TooltipContext)

    if (!context) {
      throw new Error("useTooltipContext must be used within a <Tooltip />")
    }
  
    return context
}

const TooltipTrigger = (props: TooltipTriggerProps) => {
    const { className,children,...rest } = props
    const { open,setOpen,setTriggerLayout } = useTooltipContext()
    const ref = useRef<TouchableOpacity>(null)
    const triggerLayout = useLayout<TouchableOpacity>(ref,children)

    useEffect(() => {
        setTriggerLayout(triggerLayout)
    },[triggerLayout])

    return (
        <TouchableOpacity
            onPress={() => setOpen(!open)} 
            ref={ref}
            className={cn('',className)}
            {...rest}
        />
    )
}

const TooltipContent = (props: TooltipContentProps) => {
    const { children,className,...rest } = props
    const { open,contentCoordinate,setContentLayout } = useTooltipContext()
    const ref = useRef<View>(null)
    const contentLayout = useLayout<View>(ref,children)

    useEffect(() => {
        setContentLayout(contentLayout)
    },[contentLayout])

    return (
        <Portal open={open} top={contentCoordinate.y} left={contentCoordinate.x}>
            <View
                ref={ref} 
                className={cn('rounded-lg border border-border bg-card shadow-sm',className)}
                {...rest}
            >
                {children}
            </View>
        </Portal>
    )
}

const getTooltipContentLayout = (triggerLayout: Layout, contentLayout: Layout, placement: TooltipPlacement, offset: number) => {
    let top = triggerLayout.coordinate.y + (triggerLayout.height / 2) - (contentLayout.height / 2);
    let left = triggerLayout.coordinate.x - offset - contentLayout.height
    switch(placement) {
        case 'up':
            top = triggerLayout.coordinate.y - offset - contentLayout.height
            left = triggerLayout.coordinate.x + (triggerLayout.width / 2) - (contentLayout.width / 2)
            break;
        case 'down':
            top = triggerLayout.coordinate.y + offset - triggerLayout.height
            left = triggerLayout.coordinate.x + (triggerLayout.width / 2) - (contentLayout.width / 2)
            break;
        case 'left':
            top = triggerLayout.coordinate.y + (triggerLayout.height / 2) - (contentLayout.height / 2);
            left = triggerLayout.coordinate.x - offset - contentLayout.width
            break;
        default:
            top = triggerLayout.coordinate.y + (triggerLayout.height / 2) - (contentLayout.height / 2);
            left = triggerLayout.coordinate.x + offset + triggerLayout.width
            break;
    }

    const coordinate: Coordinate = { x: left, y: top }
    return coordinate
}

const Tooltip = (props: TooltipProps) => {
    const { placement = 'up',offset = 10,children } = props
    const [open,setOpen] = useState<boolean>(false)
    const [contentLayout,setContentLayout] = useState<Layout>(defaultLayout)
    const [triggerLayout,setTriggerLayout] = useState<Layout>(defaultLayout)
    const [contentCoordinate,setContentCoordinate] = useState<Coordinate>(defaultCoordinate)
    
    useEffect(() => {
        const coordinate = getTooltipContentLayout(triggerLayout,contentLayout,placement,offset)
        setContentCoordinate(coordinate)
    },[triggerLayout,contentLayout,placement,offset])
    
    const value = { 
        open,
        contentCoordinate,
        setOpen,
        setTriggerLayout,
        setContentLayout 
    }

    return (
        <>
            <TooltipContext.Provider value={value}>
                {children}
            </TooltipContext.Provider>
        </>
    )
}

export {
    Tooltip, 
    TooltipContent, 
    TooltipTrigger,
    TooltipProps,
    TooltipTriggerProps,
    TooltipContentProps
};
