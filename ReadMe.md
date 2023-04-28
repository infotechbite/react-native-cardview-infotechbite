# This is cardview library that will provides cardview for both android and iOS.

# How to use this library

import Cardview from 'react-native-cardview-infotechbite';

 <Cardview
        elevation={2}
        shadowColor={'#000000'} // if you want to apply shadow color to cardview then pass color code here (optional)
        backgroundColor={'#00000009'} 
        shadowOpacity={0.1}
        shadowRadius={2}
        shadowOffsetHeight={2}
         padding: padding, 
        borderRadius: borderRadius, //optional
        marginTop : marginTop, //optional
        marginBottom : marginBottom, //optional
        marginStart : marginStart, //optional
        marginEnd : marginEnd, //optional
        view={renderCard} // pass the view here which shows inside cardview
      />

      function renderCard(){
        return(
            <Text>This is cardview content</Text>
        )
      }