import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Alex M', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Carl W', salary: 5000, increase: false, rise: false, id: 3 }
            ]
        }
        this.MaxId = 4
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(elem => {           //возвращает новый массив через колбек функцию            
                if (elem.id === id) {
                    return { ...elem, increase: !elem.increase }   //возвращаем новый объект
                }
                 return elem;          //если условие не совпало, возвращаем это тже объект
            }) 
        }))
    }

    onToggeRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(elem => {           //возвращает новый массив через колбек функцию            
                if (elem.id === id) {
                    return { ...elem, rise: !elem.rise }   //возвращаем новый объект
                }
                 return elem;          //если условие не совпало, возвращаем это тже объект
            }) 
        }))
    }

    valueSubmit = (name, salary) => {
        const newEmpl = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.MaxId++
        }

        this.setState(({ data }) => {
            const newArr = [...data, newEmpl];
            return {
                data: newArr
            }
        })
    }


    deleteElem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    render() {
        const sumEmployees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length
        return (
            <div className='app'>
                <AppInfo 
                sumEmployees = {sumEmployees}
                increased = {increased}/>

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteElem}
                    onToggeRise={this.onToggeRise}
                    onToggleIncrease={this.onToggleIncrease} />
                <EmployeesAddForm
                    onValueSubmit={this.valueSubmit} />
            </div>
        )
    }
}

export default App;