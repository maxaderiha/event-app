import Events from './events';
import User from './user';
import Navigation from './navigation';

export const stores = {};

Object.assign(stores, {
  user: new User(stores),
  events: new Events(stores),
  navigation: new Navigation(stores),
});