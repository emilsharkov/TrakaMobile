import React, { forwardRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export interface GalleryProps {
    children?: React.ReactNode;
    numColumns?: number;
    isHorizontal?: boolean;
}

export interface GalleryItemProps {
    children?: React.ReactNode;
}

type GalleryContextProps = {
    numColumns: number;
    isHorizontal: boolean;
}

const GalleryContext = React.createContext<GalleryContextProps | null>(null)

const useGalleryContext = () => {
    const context = React.useContext(GalleryContext)

    if (!context) {
      throw new Error("useGalleryContext must be used within a <Gallery />")
    }
  
    return context
}

const Gallery = forwardRef<ScrollView, GalleryProps>((props, ref) => {
    const { numColumns = 1, isHorizontal = true, children } = props

    return (
        <GalleryContext.Provider value={{numColumns,isHorizontal}}>
            <ScrollView
                ref={ref}
                style={ { flex: 1, alignSelf: 'stretch' }}
            >
                <View
                    style={[
                    {
                        flex: 1,
                        flexDirection: isHorizontal ? 'column' : 'row',
                    },
                    ]}
                >
                    {children}
                </View>
            </ScrollView>
        </GalleryContext.Provider>
        
    );
})

const GalleryItem = forwardRef<View, GalleryItemProps>((props, ref) => {
    const { children } = props
    const { isHorizontal,numColumns } = useGalleryContext()

    return (
        <View
            ref={ref}
            style={{
                flex: 1 / numColumns,
                flexDirection: isHorizontal ? 'row' : 'column',
            }}
        >
            {children}
        </View>
    )
})

export { Gallery, GalleryItem }