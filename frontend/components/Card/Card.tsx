import React from "react";
import { View,Text, GestureResponderEvent, TouchableOpacity } from "react-native"

export interface CardProps {
    className?: string;
    onPress?: (e: GestureResponderEvent) => void;
    children?: React.ReactElement;
}

const Card = (props: CardProps) => {
    const {className,children,onPress} = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View className={`${className} max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default Card