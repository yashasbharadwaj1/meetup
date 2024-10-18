import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import events from '../assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const event = events.find((event) => event.id === id);

  return (
    <>
      <Text>Event title : {event?.title}</Text>
    </>
  );
}
