import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ImgKindOfAnimal from '../assets/images/kind-of-animal.jpg';
import ImgGuessAnimal from '../assets/images/guess-animal.jpg';

import ControllerElement from '../components/ControllerElement';

class Home extends Component {
    render() {
        return (
            <div className="window">
                <div className="main-content">
                    <ControllerElement />
                    <div className="m-auto menu-option">
                        <div className="c-card">
                            <div className="c-card-content ta-center">
                                <img src={ImgKindOfAnimal} alt="Kind Of Animal" className="image-menu" />
                            </div>
                            <div className="c-card-footer ta-center">
                                <Link to="/kind-of-animal" className="btn3d btn btn-sm btn-primary">Macam-macam Hewan</Link>
                            </div>
                        </div>
                        <div className="c-card">
                            <div className="c-card-content  ta-center">
                                <img src={ImgKindOfAnimal} alt="Kind Of Animal" className="image-menu" />
                            </div>
                            <div className="c-card-footer ta-center">
                                <Link to="/animal-growth" className="btn3d btn btn-sm btn-primary">Pertumbuhan Hewan</Link>
                            </div>
                        </div>
                        <div className="c-card">
                            <div className="c-card-content ta-center">
                                <img src={ImgGuessAnimal} alt="Kind Of Animal" className="image-menu" />
                            </div>
                            <div className="c-card-footer ta-center">
                                <Link to="/guess-the-animal" className="btn3d btn btn-sm btn-primary">Tebak Hewan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;