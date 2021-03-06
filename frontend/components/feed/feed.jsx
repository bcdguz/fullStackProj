import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

const Feed = (props) => {
    return (
        <div className="feed-page">
            <HeaderContainer />
            <div className="feed-body">
                <h1>Picktr Feed</h1>
                <PhotoIndexContainer />
            </div>
        </div>
    )
}

export default Feed;