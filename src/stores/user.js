import { observable, action } from 'mobx';
import firebase from 'firebase';
import RootStore from './rootStore';

class User extends RootStore {
  @observable email = '';
  @observable password = '';

  currUser = null;

  @action redirectAfterSignIn(routeName) {
    this.getStore('navigation').reset(routeName);
  }
}

export default User;