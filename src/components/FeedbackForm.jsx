import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from './RatingSelect';

function FeedbackForm(props) {
const [text, setText] = useState('');
const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState('');
const [rating, setRating] = useState(10);


const handleTextChange = (e) => {
    if(text === '')
    {
        setBtnDisabled(true);
        setMessage(null);
    }
    else if (text !== '' && text.trim().length <= 10)
    {
        setMessage('Text must be at list 10 characters');
        setBtnDisabled(true);

    }
    else
    {
        setBtnDisabled(false);
    }
    setText(e.target.value)
}


const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10)
    {
        const newFeedback = {
            text: text,
            rating: rating,
        }
        props.handleAdd(newFeedback);
        setText('');
    }
}

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;