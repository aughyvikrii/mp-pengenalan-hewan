import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {

    let history = useHistory();

    return (
        <div className="window">
            <div className="main-content ta-center">
                <div className="m-auto">
                    <strong>
                        <h1 style={ {color : 'red'} }>Halaman Tidak Ditemukan</h1>
                        <button className="btn3d btn btn-lg btn-primary" onClick={() => history.goBack()}>Kembali</button>
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;