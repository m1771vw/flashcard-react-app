import React, { Component } from 'react';
import TermDefInput from './TermDefInput';


class EditView extends Component {

    state = {
        setname: this.props.selectedCardSet.setname,
        description: this.props.selectedCardSet.description,
        cards: this.props.selectedCardSet.cards,
    }


    change = (property, index, newValue) => {
        let copy = { ...this.state.cards[index] };
        copy[property] = newValue;

        let newCards = [
            ...this.state.cards.slice(0, index),
            copy,
            ...this.state.cards.slice(index + 1)
        ];

        this.setState({ cards: newCards })
    }


    addCard = e => {
        let newCards = [...this.state.cards, { term: '', definition: '' }];
        this.setState({ cards: newCards })
    }

    onChange = event => {
        this.setState({
            setname: event.target.value
        })
    }

    onChange2 = event => {
        this.setState({
            description: event.target.value
        })
    }



    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item has-text-centered">
                        <input className="input is-primary set-name-field"
                        value={this.state.setname}
                            type="text" placeholder="Enter set name here..." />

                    </div>
                </div>

                <div className="level text-area-level">
                    <textarea className="textarea"
                        value={this.state.description}
                        rows="7"></textarea>
                </div>
                {this.state.cards.map((card, index) => (
                        <TermDefInput
                            key={index}
                            card={card}
                            change={this.change}
                            index={index}
                        />
                    ))}
            

                <div className="level" id="createbutton1">
                    <button className="button is-large level-item" onClick={this.addCard}>+</button>
                    <button className="button is-large level-item" onClick={() => {
                         this.props.addToCards(this.state)
                         this.setState({
                             setname: '',
                             description: ''
                         }) 
                        }
                        
                        } >

                        Submit Set</button>
                </div>


            </div>
        );
    }
}

EditView.propTypes = {

};

export default EditView;
