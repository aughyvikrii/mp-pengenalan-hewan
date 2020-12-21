import { useHistory } from 'react-router-dom';

const Author = () => {

    const history = useHistory();

    return (
        <div className="window">
            <div className="main-content">
                <div className="h-100 w-100 text-center align-middle">
                    <h1>Tentang Pembuat</h1>
                    <p>
                        Dibuat oleh @aughyvikrii
                    </p>
                    <button className="btn3d btn btn-lg btn-danger" onClick={() => history.goBack()}>Kembali</button>
                </div>
            </div>
        </div>
    );
}

export default Author;