import { combineClasses } from "@/utils/combine";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export interface DialogProps {
    styling?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode; 
}

const Dialog = (props: DialogProps) => {
    const {children,styling,open,setOpen} = props

    return (
        <>
            {open &&
                <>
                    <View 
                        className={`opacity-95 absolute bg-gray-100 justify-center items-center flex overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none w-screen h-screen`}
                    >
                        <TouchableOpacity 
                            className={`w-screen h-screen`} 
                            onPress={() => setOpen(false)}
                        />
                    </View>
                    <View className={combineClasses(styling,'z-50 opacity-100 p-4 h-1/2 border-0 rounded-lg shadow-lg absolute bg-white outline-none focus:outline-none')}>
                        {children}
                    </View>
                </>
                
            }
        </>
    )
}

export default Dialog