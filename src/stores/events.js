import { observable, computed, action } from 'mobx';
import { entitiesFromFB, getSections } from '../utils';
import firebase from 'firebase';
import RootStore from './rootStore';

class Events extends RootStore {
  @observable loading = false;
  @observable loaded = false;
  @observable error = '';

  @observable entities = {};

  @computed get sections() {
    return getSections(this.entities);
  }

  @action loadAll() {
    this.loading = true;

    firebase.database().ref('events').once('value')
      .then(data => {
        this.entities = entitiesFromFB(data.val());
        this.loading = false;
        this.loaded = true;
      },
      error => {
        this.loading = false;
        this.loaded = false;
        this.error = error;
      });
  }
}

export default Events;