import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:10'},
        {title: 'All stars', duration: '3:10'},
        {title: 'bubkakak', duration: '4:17'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED') {
            return action.payload;
        }
        return selectedSong;
}


export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});


