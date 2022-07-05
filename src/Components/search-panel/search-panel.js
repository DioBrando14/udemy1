import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;         //объект события записывается в переменную
        this.setState({term});              //эта переменная уходит в локальный стейт
        this.props.onUpdateSearch(term)     //перекидываем в App data
    }

    render() {
        return (

            <input
                type='text'
                className='form-control search-input'
                placeholder='Найти сотрудника' 
                value={this.state.term}        //объект события
                onChange={this.onUpdateSearch}/>
    
        )
    }
}

export default SearchPanel;