import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs'



export default function EventListItem({event}) { 
    return (

        <View className='gap-3 p-3 border-b-2 border-gray-100 pb-3'>
            <View className='flex-row'>
                <View className='flex-1'>
                    <Text className='text-lg font-semibold uppercase text-amber-800'>
                        {dayjs(event.datetime).format('ddd, MMM D')} - 
                        {dayjs(event.datetime).format('h:mm A')}
                        </Text> 
                    
                    {/*<Text style={{fontSize: 30,fontWeight: 'bold'}}>This is title</Text> */}
                    
                    <Text className='text-xl font-bold' numberOfLines={1}>
                        {event.title}</Text> 
                    
                    <Text className='mr-auto text-gray-700'>{event.location}</Text> 
                   
                </View>
                {/*Event Image*/}
                <Image
                    source={{ uri: event.image }}
                    className='aspect-video w-2/5 rounded-xl'
                />
            </View>


            {/*Footer*/}
            <View className='flex-row gap-3'>
                
                <Text className='mr-auto text-gray-700'>16 going</Text>

                <Feather name="share" size={20} color="black" />
                <Feather name="bookmark" size={20} color="black" />
            </View>
        </View>


    )
}