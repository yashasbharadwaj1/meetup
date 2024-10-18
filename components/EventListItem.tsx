import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';



export default function EventListItem({event}) { 
    return (

        <View className='gap-3 p-3'>
            <View className='flex-row'>
                <View className='flex-1'>
                    <Text className='text-lg font-semibold uppercase text-amber-700'>Wed 13,Sep • 19:30 CEST</Text>
                    {/*
    <Text style={{fontSize: 30,fontWeight: 'bold'}}>This is title</Text> 
    */}
                    <Text className='text-xl font-bold' numberOfLines={1}>
                        {event.title}</Text>
                    <Text className='text-gray-700'>{event.location}</Text>
                </View>
                {/*Event Image*/}
                <Image
                    source={{ uri: event.image }}
                    className='aspect-video w-2/5 rounded-xl'
                />
            </View>


            {/*Footer*/}
            <View className='flex-row gap-3'>
                <Text className='mr-auto text-gray-700'>16 GOING</Text>

                <Feather name="share" size={24} color="black" />
                <Feather name="bookmark" size={24} color="black" />
            </View>
        </View>


    )
}