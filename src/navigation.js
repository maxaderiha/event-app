import { StackNavigator } from 'react-navigation';
import Auth from './screens/Auth/SignIn';
import Event from './screens/Event/Event';
import EventsList from './screens/EventsList/EventsList';

const Navigator = StackNavigator({
  eventsList: {
    screen: EventsList,
  },
  auth: {
    screen: Auth,
  },
  event: {
    screen: Event,
  },
});


export default Navigator;