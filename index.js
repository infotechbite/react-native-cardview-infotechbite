import { View, Text } from 'react-native'
import React from 'react'

const Cardview = ({ backgroundColor,borderRadius,padding,elevation,shadowOpacity,shadowRadius,shadowOffsetHeight,shadowColor,view,marginTop,marginBottom,marginStart,marginEnd }) => {
   
    return (
    <View style={{
        shadowColor: shadowColor,
        shadowOffset: { width: 0, height: shadowOffsetHeight },
        shadowRadius: shadowRadius,
        shadowOpacity: shadowOpacity,
        elevation: elevation,
        backgroundColor: backgroundColor,
        padding: padding,
        borderRadius: borderRadius,
        marginTop : marginTop,
        marginBottom : marginBottom,
        marginStart : marginStart,
        marginEnd : marginEnd,
    }} >
        {view}
        </View>
    );

}




export default Cardview