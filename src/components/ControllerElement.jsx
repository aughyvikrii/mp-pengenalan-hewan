import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ControllerElement extends Component {

    render() {
        return(
            <div className="controllers">
                <Link to="/" className="btn3d btn btn-sm btn-primary"><i className="fa fa-home"></i></Link>
                <Link to="/home" className="btn3d btn btn-sm btn-warning"><i className="fa fa-compass"></i></Link>
                <button className={"btn3d btn btn-sm " + (this.props.musicPlay ? 'btn-danger' : 'btn-success')} onClick={this.props.toggleMusic}><i className="fas fa-volume-up"></i></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        musicPlay: state.musicPlay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMusic: () => dispatch({type: 'TOGGLE_MUSIC'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControllerElement);