import { Component } from 'react';
import { connect } from 'react-redux';

class QuestionClue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlay: false
        }

        this.playSound.bind(this);
    }

    playSound = () => {
        const audioSrc = require(`../assets/musics/${this.props.clue.source}`).default;
        let audio = new Audio(audioSrc);
        
        this.setState({
            isPlay: true
        });


        this.props.bgMusic.volume = 0.0;
        console.log(this.props.bgMusic.volume)

        audio.play();

        audio.addEventListener('ended', () => {
            this.setState({
                isPlay: false
            });

            this.props.bgMusic.volume = 0.7;
        });
    }

    render() {
        return(
            <div>
                {
                    this.props.clue?.type === 'audio' ?
                    
                        this.state.isPlay ?
                        <button className="btn3d btn btn-danger btn-lg"> <i className="fa fa-volume-up"></i> Memutar Suara</button>
                        :
                        <button className="btn3d btn btn-primary btn-lg" onClick={this.playSound}> <i className="fa fa-play"></i> Putar Suara</button>

                    :
                    ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bgMusic: state.bgMusic
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMusic: () => dispatch({type: 'TOGGLE_MUSIC'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionClue);