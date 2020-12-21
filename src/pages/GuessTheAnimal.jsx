import { Component } from 'react';
import ControllerElement from '../components/ControllerElement';

class GuessTheAnimal extends Component {
    render() {
        return (
            <div className="window">
                <div className="main-content">
                    <ControllerElement />
                    <div className="m-auto menu-option">
                        <div className="c-card">
                            <div className="c-card-content ta-center">
                            </div>
                            <div className="c-card-footer ta-center">
                                <a href="/kind-of-animal" className="btn3d btn btn-sm btn-primary">Macam Macam Hewan</a>
                            </div>
                        </div>
                        <div className="c-card">
                            <div className="c-card-content  ta-center">
                            </div>
                            <div className="c-card-footer ta-center">
                                <a href="/animal-growth" className="btn3d btn btn-sm btn-primary">Pertumbuhan Hewan</a>
                            </div>
                        </div>
                        <div className="c-card">
                            <div className="c-card-content ta-center">
                            </div>
                            <div className="c-card-footer ta-center">
                                <a href="/guess-the-animal" className="btn3d btn btn-sm btn-primary">Tebak Hewan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuessTheAnimal;