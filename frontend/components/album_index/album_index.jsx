import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllAlbums();
        this.props.fetchPhotosAlbums();
        this.props.fetchAllPhotos();
    }

    handleClick(e) {
        const albId = e.currentTarget.id;
        this.props.history.push(`/album/${albId}`);
    }

    render() {
        const indexItems = this.props.albums.map((album) => {
            return (
                <li onClick={this.handleClick} id={album.id}
                    key={album.id} className="album-info">
                    <AlbumIndexItem album={album} photos={this.props.photos}
                    photosAlbums={this.props.photosAlbums} />
                </li>
            )
        })

        let createButton = <div></div>
        if (this.props.currentUserId === this.props.userId) {
            createButton = <div className="create-alb-container">
                                <Link to="/album/new">Create an Album</Link>
                            </div>
        }

        return (
            <div className="album-index-page">
                <div className="album-index-content">
                    {createButton}
                    <ul className="album-list">
                        {indexItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AlbumIndex;