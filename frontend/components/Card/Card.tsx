import { combineClasses } from "@/utils/combine";
import React from "react";
import { View,Text, GestureResponderEvent, TouchableOpacity } from "react-native"

export interface CardProps {
    styling?: string;
    onPress?: (e: GestureResponderEvent) => void;
    children?: React.ReactNode;
}

const Card = (props: CardProps) => {
    const {styling,children,onPress} = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View className={combineClasses(styling,'max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700')}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default Card