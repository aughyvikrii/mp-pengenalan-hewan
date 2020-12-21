import { Component } from 'react';
import ControllerElement from '../components/ControllerElement';

class AnimalGrowth extends Component {
    render() {
        return (
            <div className="window">
                <div className="main-content">
                    <ControllerElement />
                    <div className="m-auto animal-growup">
                        <center>
                        <iframe title="Animal growth" width="1143" height="643" src="https://www.youtube.com/embed/m0Y3GLi7WBk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </center>
                        <div className="koa-button-sign">
                            <div className="">
                                <button className="btn3d btn btn-danger btn-lg btn-block" onClick={ () => this.props.history.push('/kind-of-animal') }> <i className="fa fa-arrow-circle-left"></i> Kembali</button>
                            </div>
                            <div className="">
                                <button className="btn3d btn btn-primary btn-lg btn-block" onClick={ () => this.props.history.push('/guess-the-animal') }> Selanjutnya <i className="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimalGrowth;