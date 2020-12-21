import { Component } from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';
import  ImgAnimalGroup from '../assets/images/animal-growup.png';

class Index extends Component {
    render() {
        return (
            <div className="window">
                <div className="main-content ta-center">
                    <div className="m-auto">
                        <img src={ImgAnimalGroup} alt="Logo" className="index-logo"/>
                        <div>
                            <Link to="/home" className="btn3d btn btn-lg btn-danger" onClick={ this.props.firstToggleMusic }><i className="fa fa-play"></i>  Mulai Belajar</Link>
                        </div> <br />
                        <div>
                            <Link to="/about" className="btn3d btn btn-lg btn-magick"><i className="fa fa-info-circle"></i> Tentang Web</Link>
                            <Link to="/author" className="btn3d btn btn-lg btn-primary"><i className="fa fa-smile"></i> Tentang Pembuat</Link>
                        </div> <br />
                        <div>
                            Created by <a href="https://instagram.com/aughyvikrii">@aughyvikrii</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        firstToggleMusic: () => dispatch({type: 'FIRST_TOGGLE_MUSIC'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);