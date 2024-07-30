import { cn } from '@/utils/classNameUtils';
import React, { forwardRef, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

interface GalleryProps extends React.ComponentPropsWithoutRef<typeof ScrollView> {
    numColumns?: number;
    isHorizontal?: boolean;
}

interface GalleryItemProps extends React.ComponentPropsWithoutRef<typeof View> {}

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
    const { numColumns = 1, isHorizontal = true, className, children, ...rest } = props
    const flexDirection = isHorizontal ? 'col' : 'row'
    
    const arraysOfChildren: React.ReactNode[][] = useMemo(() => {
        const childrenArray = React.Children.toArray(children)
        const arraysOfChildren: React.ReactNode[][] = Array.from({ length: numColumns }, () => []);
        childrenArray.forEach((child: React.ReactNode, index: number) => {
            arraysOfChildren[index % numColumns].push(childrenArray[index])
        })
        return arraysOfChildren;
    }, [children, numColumns])
    
    return (
        <GalleryContext.Provider value={{numColumns,isHorizontal}}>
            <ScrollView
                ref={ref}
                className={cn(`flex-1 flex-${flexDirection}`, className)}
                {...rest}
            >
                {arraysOfChildren.map((arrayOfChildren: React.ReactNode[], index: number) => {
                    return (
                        <View className='flex-1'>
                            {arrayOfChildren.map((child: React.ReactNode, index: number) => {
                                return (
                                    <>{child}</>
                                )
                            })}
                        </View>
                    )
                })}
            </ScrollView>
        </GalleryContext.Provider>
        
    );
})

const GalleryItem = forwardRef<View, GalleryItemProps>((props, ref) => {
    const { className, children, ...rest } = props
    const { isHorizontal,numColumns } = useGalleryContext()
    const flexDirection = isHorizontal ? 'row' : 'col'

    return (
        <View
            ref={ref}
            className={cn(`flex-${flexDirection}`, className)}
            {...rest}
        >
            {children}
        </View>
    )
})

export { Gallery, GalleryItem }


{/* <SafeAreaView className="flex-1">
        <ScrollView className="flex-1" contentContainerClassName="flex-row">
            <FlatList
            className="flex-1 w-full"
            data={[1,2,3,4,5,6]}
            renderItem={({item}) => <View style={{height:20*item}} className={`bg-red-500 border rounded-lg`}></View>}
            // keyExtractor={item => item}
            />
            <FlatList
            className="flex-1 w-full"
            data={[1,2,3,4]}
            renderItem={({item}) => <View className="bg-red-500"><CardExample/></View>}
            // keyExtractor={item => item}
            />
        </ScrollView>
    </SafeAreaView> */}