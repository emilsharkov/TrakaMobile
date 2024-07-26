import React, { forwardRef } from "react";
import { TouchableOpacity, View, Text } from "react-native"
import { cn } from "../../utils/classNameUtils"

const Card = forwardRef<React.ElementRef<typeof TouchableOpacity>,React.ComponentPropsWithoutRef<typeof TouchableOpacity>>((props, ref) => {
    const { className,...rest } = props
    return (
        <TouchableOpacity
            ref={ref} 
            className={cn('rounded-lg border border-border bg-card shadow-sm',className)}
            {...rest}
        />
    )
});

const CardHeader = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>((props, ref) => {
    const { className,...rest } = props
    return (
        <View 
            ref={ref} 
            className={cn('flex flex-col space-y-1.5 p-6', className)} 
            {...rest} 
        />
    )
});
  
const CardTitle = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>((props, ref) => {
    const { className,...rest } = props
    return (
        <Text
            ref={ref}
            className={cn('text-2xl text-card-foreground font-semibold leading-none tracking-tight',className)}
            {...rest}
        />
    )
});

const CardDescription = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>((props, ref) => {
    const { className,...rest } = props
    return (
        <Text 
            ref={ref} 
            className={cn('text-sm text-muted-foreground', className)} 
            {...rest} 
        />
    )
});

const CardContent = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>((props, ref) => {
    const { className,...rest } = props
    return (
        <View 
            ref={ref} 
            className={cn('p-6 pt-0', className)} 
            {...rest} 
        />
    )
});

const CardFooter = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>((props, ref) => {
    const { className,...rest } = props
    return (
        <View 
            ref={ref} 
            className={cn('flex flex-row items-center p-6 pt-0', className)} 
            {...rest} 
        />
    )
});
  
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
