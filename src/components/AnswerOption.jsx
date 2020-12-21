import { Component } from 'react';
import Swal from 'sweetalert2';

import ImgRightAnswer from '../assets/images/rightAnswer.png';
import ImgWrongAnswer from '../assets/images/wrongAnswer.png';

class AnswerOption extends Component {

    checkAnswer = () => {
        if( this.props.id != this.props.rightAnswer ) {
            Swal.fire({
                title: 'Yahhh...',
                text: 'Jawaban kamu salah, ayo coba lagi!',
                imageUrl: ImgWrongAnswer,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                timer: 2000,
                showConfirmButton: false
              })
        } else {
            Swal.fire({
                title: 'Horeee...',
                text: 'Jawaban kamu benar!',
                imageUrl: ImgRightAnswer,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonText: 'Pertanyaan Berikutnya'
            }).then( result => {
                if(result.isConfirmed) {
                    this.props.next();
                }
            });
        }
    }

    render() {
        return(
            <div className="ga-answer-option ta-center" onClick={this.checkAnswer}>
                <img src={require(`../assets/images/${this.props.src}`).default} alt={this.props.id} id={this.props.id} />
            </div>
        );
    }
}

export default AnswerOption;