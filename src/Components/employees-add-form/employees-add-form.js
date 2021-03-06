import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueSubmit = (e) => {
        e.preventDefault();
        this.props.onValueSubmit(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary:''
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        return (            
            <div className='app-add-form'>
                <h3> Добавьте нового сотрудника </h3>
                <form className='add-form d-flex'
                onSubmit={this.onValueSubmit}>
                    <input type='text'
                        className='form-control new-post-label'
                        placeholder='Как его зовут'
                        name='name' 
                        value={name}    //чтобы значение хранилось не на странице а в реакте
                        onChange={this.onValueChange}/>
                    <input type='number'
                        className='form-control new-post-label'
                        placeholder='з/п в $?' 
                        name='salary'
                        value={salary}   //чтобы значение хранилось не на странице а в реакте
                        onChange={this.onValueChange}/>
                    <button type='submit'
                        className='btn btn-outline-submit'
                        >Добавить</button>

                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;