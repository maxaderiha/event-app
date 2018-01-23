import { StackNavigator } from 'react-navigation';
import Auth from './screens/Auth/SignIn';
import Event from './screens/Event/Event';
import EventsList from './screens/EventsList/EventsList';

const Navigator = StackNavigator({
  auth: {
    screen: Auth,
  },
  eventsList: {
    screen: EventsList,
  },
  event: {
    screen: Event,
  },
});


export default Navigator;