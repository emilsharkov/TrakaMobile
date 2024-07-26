import { combineClasses } from "@/utils/combine";
import React, { forwardRef } from "react";
import { View,Text, GestureResponderEvent, TouchableOpacity } from "react-native"

export interface CardProps {
    styling?: string;
    onPress?: (e: GestureResponderEvent) => void;
    children?: React.ReactNode;
}

const Card = forwardRef<React.ElementRef<typeof TouchableOpacity>, CardProps>((props, ref) => {
    const { styling,children,onPress } = props

    return (
        <TouchableOpacity
            ref={ref} 
            onPress={onPress}
            className={combineClasses(styling,'p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700')}
        >
            {children}
        </TouchableOpacity>
    )
})

export default Card