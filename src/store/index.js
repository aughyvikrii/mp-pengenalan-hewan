import { createStore } from 'redux';
import BensoundUkulele from '../assets/musics/bensound-ukulele.mp3';
import { execFunction } from './function';

const initState = {
    musicPlay: false,
    firstClickIsSet: false,
    bgMusic: new Audio(BensoundUkulele)
};

initState.bgMusic.volume = 0.7;
initState.bgMusic.addEventListener('ended', () => {
    initState.bgMusic.currentTime = 0;
    initState.bgMusic.play();
}, false);

const rootReducer = (state = initState, action) => {

    let result = execFunction(action.type.toLowerCase(), state, action);
    if(result) return result;

    return state;
}

const storeRedux = createStore(rootReducer);

export default storeRedux;