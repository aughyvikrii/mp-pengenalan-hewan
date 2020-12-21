import { Component } from 'react';
import ControllerElement from '../components/ControllerElement';
import guess_the_animal from '../guess_the_animal';
import AnswerOption from '../components/AnswerOption';
import QuestionClue from '../components/QuestionClue';

class GuessTheAnimal extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentQuestionIndex: -1,
            currentQuestionObject: {},
            quizComplete: false
        };

        this.next.bind(this);
    }

    next = () => {

        const nextIndex = this.state.currentQuestionIndex + 1;

        if( nextIndex >= guess_the_animal.length ) {
            this.setState({
                quizComplete: true
            })
            return;
        }

        this.setState({
            currentQuestionIndex: nextIndex,
            currentQuestionObject: guess_the_animal[nextIndex]
        });

    }

    componentDidMount() {
        this.next();
    }

    render() {
        return (
            <div className="window">
                <div className="main-content">
                    <ControllerElement />
                    <div className="m-auto guess-animal">
                    {
                        !this.state.quizComplete ?
                            <>
                            <div className="ga-hint ta-center m-auto">
                                <div className="m-auto" 
                                style={{
                                    width: '100%'
                                }}
                                >
                                    <h1 className="question-number">Pertanyaan {this.state.currentQuestionIndex + 1}</h1> <br/> <hr/>
                                    <div  className="question">{this.state.currentQuestionObject.question}</div> <br/>
                                    <QuestionClue clue={this.state.currentQuestionObject.clue} />
                                </div>
                            </div>
                            <div className="ga-answer">
                                {
                                    typeof this.state.currentQuestionObject.options != 'undefined' ?
                                    Object.keys(this.state.currentQuestionObject.options)
                                    .map( key => {
                                        let option = this.state.currentQuestionObject.options[key];
                                        return <AnswerOption key={key} src={option.src} id={option.id} next={this.next} rightAnswer={this.state.currentQuestionObject.answer} />
                                    })
                                    :
                                    <div>
                                        Loading...
                                    </div>
                                }
                            </div>
                            </>
                        :
                        <div className=" ta-center m-auto">
                            <h1>Horeeeee!! <br/><br/> Kamu telah menyelesaikan quiz tebak hewan.</h1> <br/>
                            <button className="btn3d btn btn-lg btn-primary" onClick={() => this.props.history.push('/home')}> <i className="fa fa-home"></i> Kembali ke beranda</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default GuessTheAnimal;