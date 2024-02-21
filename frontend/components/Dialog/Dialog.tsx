import { useEffect, useState } from "react";
import { View } from "react-native";

export interface DialogProps {
    className?: string;
    isOpen?: boolean;
    children?: React.ReactElement; 
}

const Dialog = (props: DialogProps) => {
    const {children,className,isOpen} = props
    const [open,setOpen] = useState<boolean>(isOpen ?? false)

    console.log(open)

    useEffect(() => {
        if(isOpen !== undefined) {
            setOpen(isOpen)
        }
    },[isOpen])

    return (
        <>
            {open &&
                <View className={`z-50 fixed opacity-50 bg-gray-500 overflow-y-auto h-screen w-screen`}>
                    <View className={`relative p-5 border w-2/3 h-1/4 shadow-lg rounded-md bg-white`}>
                        {children}
                    </View>
                </View>
            }
        </>
    )
}

export default Dialog