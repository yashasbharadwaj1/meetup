import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';
import EventListItem from '~/components/EventListItem';

import events from '~/assets/events.json';


export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      {/*Event List Item*/}
      <EventListItem event={events[2]} />
      <EventListItem event={events[3]} />


    </>
  );
}

