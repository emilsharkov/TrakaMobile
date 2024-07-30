import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import { View } from "react-native";
import { cn } from "@/utils/classNameUtils";
import { Layout, useLayout } from "../Portal/useLayout";

type TooltipPlacement = 'up' | 'down' | 'right' | 'left'

interface TooltipProps {
    placement?: TooltipPlacement;
    children?: React.ReactNode;
}

interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof View> {}

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof View> {}

type TooltipContextType = {
    open: boolean;
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
    const ref = useRef<View>(null)
    const triggerLayout = useLayout<View>(ref,children)

    useEffect(() => {
        setTriggerLayout(triggerLayout)
    },[triggerLayout])

    return (
        <View 
            ref={ref}
            className={cn('',className)}
            {...rest}
        />
    )
}

const TooltipContent = (props: TooltipContentProps) => {
    const { children,className,...rest } = props
    const { open,setContentLayout } = useTooltipContext()
    const ref = useRef<View>(null)
    const contentLayout = useLayout<View>(ref,children)

    useEffect(() => {
        setContentLayout(contentLayout)
    },[contentLayout])

    return (
        <Portal open={open}>
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

const useTooltipLayout = (placement: TooltipPlacement, triggerLayout: Layout, contentLayout: Layout) => {
    const top = 0
    const left = 0
    return {top,left}
}

const Tooltip = (props: TooltipProps) => {
    const { placement = 'up',children } = props
    const [open,setOpen] = useState<boolean>(false)
    const [contentLayout,setContentLayout] = useState<Layout>({ x: 0, y: 0, width: 0, height: 0 })
    const [triggerLayout,setTriggerLayout] = useState<Layout>({ x: 0, y: 0, width: 0, height: 0 })
    const {  } = useTooltipLayout(placement,triggerLayout,contentLayout)
    const value = { open,setOpen,setTriggerLayout,setContentLayout }

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
