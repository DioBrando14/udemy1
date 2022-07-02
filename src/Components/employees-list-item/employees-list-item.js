import { Component } from 'react';

import './employees-list-item.css'

class Employeeslistitem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: true
        }
    }


    poviwenie = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }   

    render() {

        const { name, salary , onDelete} = this.props;
        const { increase, like } = this.state;

        let listGroupItem = 'list-group-item d-flex justify-content-between';
        if (increase) {
            listGroupItem = listGroupItem + ' increase'
        }
        if (!like) {
            listGroupItem = listGroupItem + ' like'
        }

        return (

            <li className={listGroupItem}>
                <span className='list-group-item-label' onClick={this.onLike}> {name} </span>
                <input type='text' className='list-group-item-input' defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-cookie btn-sm '
                        onClick={this.poviwenie}>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button
                        type='button'
                        className='btn-trash btn-sm '
                        onClick={onDelete}>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )
    }

}

export default Employeeslistitem;