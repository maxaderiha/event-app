import Navigator from '../navigation';
import { observable, action, computed } from 'mobx';
import { NavigationActions } from 'react-navigation';
import RootStore from './rootStore';

class Navigation extends RootStore {
  @observable state = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('auth')
  );

  @action dispatch = (action) => {
    this.state = Navigator.router.getStateForAction(action, this.state);
  }

  @computed get config() {
    return {
      dispatch: this.dispatch,
      state: this.state,
    }
  }

  @action reset(routeName) {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });

    this.dispatch(action);
  }
}

export default Navigation;