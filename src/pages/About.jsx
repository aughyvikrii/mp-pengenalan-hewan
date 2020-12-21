import { useHistory } from 'react-router-dom';

const About = () => {

    const history = useHistory();

    return (
        <div className="window">
            <div className="main-content">
                <div className="h-100 w-100 text-center align-middle">
                    <h1>Tentang Web</h1>
                    <p>
                        Web ini dibuat untuk media pembelajaran
                    </p>
                    <button className="btn3d btn btn-lg btn-danger" onClick={() => history.goBack()}>Kembali</button>
                </div>
            </div>
        </div>
    );
}

export default About;