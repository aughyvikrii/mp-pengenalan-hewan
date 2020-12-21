import { Component } from 'react';
import { connect } from 'react-redux';

import ControllerElement from '../components/ControllerElement';
import kind_of_animal from '../kind_of_animal';

class KindOfAnimal extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            currentIndex: -1,
            currentAnimal: {}, 
            currentImage: null,
            currentAudio: new Audio(false)
        }

        this.state.currentAudio.addEventListener('ended',() => {
            this.setState({audioPlay:false});
            this.props.bgMusic.volume = 0.7;
        });

        this.next.bind(this);
        this.back.bind(this);
    }

    next = () => {
        
        let nextAnimalIndex = this.state.currentIndex + 1;

        if(nextAnimalIndex === kind_of_animal.length) {
            this.props.history.push('/animal-growth')
            return;
        }

        let currentAnimal = kind_of_animal[nextAnimalIndex];

        const imgUrl = require(`../assets/images/${currentAnimal.image}`);
        const audioUrl = require(`../assets/musics/${currentAnimal.audio}`);

        this.state.currentAudio.src = audioUrl.default;

        this.setState({
            currentAnimal: currentAnimal,
            currentIndex: nextAnimalIndex,
            currentImage: imgUrl.default,
            audioPlay: false
        });
        this.props.bgMusic.volume = 0.7;
        
    }

    back = () => {
        let prevAnimalIndex = this.state.currentIndex - 1;

        if(prevAnimalIndex < 0) {
            this.props.history.push('/home')
            return;
        }

        let currentAnimal = kind_of_animal[prevAnimalIndex];
        
        const imgUrl = require(`../assets/images/${currentAnimal.image}`);
        const audioUrl = require(`../assets/musics/${currentAnimal.audio}`);

        this.state.currentAudio.src = audioUrl.default;

        this.setState({
            currentAnimal: currentAnimal,
            currentIndex: prevAnimalIndex,
            currentImage: imgUrl.default,
            audioPlay: false
        });
        this.props.bgMusic.volume = 0.7;
    }

    toggleAudio = () => {
        if(!this.state.audioPlay) {
            this.state.currentAudio.play();
            this.setState({
                audioPlay: true
            });

            this.props.bgMusic.volume = 0.0;
        } else {
            this.state.currentAudio.pause();
            this.setState({
                audioPlay: false
            });
            this.props.bgMusic.volume = 0.7;
        }
    }

    

    componentDidMount() {
        this.next();
    }

    render() {
        return (
            <div className="window">
                <div className="main-content">
                    <ControllerElement />
                    <div className="m-auto kind-of-animal">
                        <div className="animal-image">
                            <img src={this.state.currentImage} alt="animal" />
                        </div>
                        <div className="animal-info">
                            <table className="table-animal-info">
                                <tbody>
                                    <tr>
                                        <td className="ta-center text-bold bg-primary">Informasi</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {this.state.currentAnimal.information}
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="ta-center text-bold bg-primary">Suara</td>
                                    </tr>

                                    <tr>
                                        <td className="ta-center">
                                            { this.state.audioPlay ?
                                                <button className="btn3d btn btn-md btn-danger" onClick={this.toggleAudio}> <i className="fa fa-volume-up"></i> Memutar Suara</button>
                                                :
                                                <button className="btn3d btn btn-md btn-info" onClick={this.toggleAudio}> <i className="fa fa-play"></i> Putar Suara</button>
                                            }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="ta-center text-bold bg-primary">Makanan</td>
                                    </tr>

                                    <tr>
                                        <td className="ta-center">
                                            {this.state.currentAnimal.food}
                                        </td>
                                    </tr>
                                </tbody>
                            </table> <br />
                            <div className="koa-button-sign">
                                <div>
                                    <button className="btn3d btn btn-danger btn-lg btn-block" onClick={this.back}> <i className="fa fa-arrow-circle-left"></i> Kembali</button>
                                </div>
                                <div>
                                    <button className="btn3d btn btn-primary btn-lg btn-block" onClick={this.next}> Selanjutnya <i className="fa fa-arrow-circle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        musicPlay: state.musicPlay,
        bgMusic: state.bgMusic
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMusic: () => dispatch({type: 'TOGGLE_MUSIC'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KindOfAnimal);