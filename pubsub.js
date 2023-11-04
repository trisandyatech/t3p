const PubSub = {
  store: {},
  subscribe: (event, listener) => {
    if(!PubSub.store[event]){
      PubSub.store[event] = []; 
    }
    PubSub.store[event].push(listener); 
  },
  dispatch: (action) => {
    const {type, payload} = action;
    PubSub.store[type].forEach(listener => {
       listener(payload);
    });
  }
}

PubSub.subscribe('click', (payload) => {
  console.log('Clicked 1', payload);
});

PubSub.subscribe('click', (payload) => {
  console.log('Clicked 2', payload);
});

PubSub.dispatch({type: 'click', payload: 'Hello'});
