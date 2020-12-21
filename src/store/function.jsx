/**
 * Function dispatch toogle music
 */
/* eslint-disable */


export const execFunction = (functionName, state, action) => {

    switch(functionName){
        case 'toggle_music':
            return toggle_music(state, action);
        break;

        case 'first_toggle_music':
            return first_toggle_music(state, action);
    }

    return false;
}

export const toggle_music = (state,action) => {
    !state.musicPlay ? state.bgMusic.play() : state.bgMusic.pause();
    return {
        ...state,
        musicPlay: !state.musicPlay,
        firstClickIsSet: true
    };
}

export const first_toggle_music = (state,action) => {
    if(!state.firstClickIsSet) {
        state.bgMusic.play();
        return {
            ...state,
            firstClickIsSet: true,
            musicPlay: true
        }
    }
}