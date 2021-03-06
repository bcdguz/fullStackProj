import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import { createFavorite, deleteFavorite, fetchFavorites } from './util/favorites_api_util';
import { fetchAllFavorites, newFavorite, removeFavorite } from './actions/favorite_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;                   //Allowing user to refresh & stay logged in
    if (window.currentUser) {    //We set currentUser in root.html.erb
        const preloadedState = { //If a currentUser exists, adding to preload
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

    //Remove these after done testing!
    // window.store = store;
})