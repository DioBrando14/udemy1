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
                { name: 'Alex M', salary: 3001, increase: true, rise: true, id: 2 },
                { name: 'Carl W', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term:'',
            filter:'all'
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

    searchEmp = (items, term) => {              //берет массив и строку
        if (term.length === 0) {
            return items                        //если пользователь удалил в поиске или ничего не ввел, вернуть те же данные
        }
        return items.filter(elem => {               
            return elem.name.indexOf(term) > -1            // данные фильтруются по имени, если ничего нету то не делать ничего
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterName = (items, filter) => {
        switch (filter) {
            case 'rise': return items.filter(elem => elem.rise);
            case 'moreThen3000': return items.filter(elem => elem.salary > 3000);
            default:return items;
        }
    }

    filterState = (filter) => {
        this.setState({filter});
    }



    render() {
        const {data, term, filter} = this.state;
        const sumEmployees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.onFilterName(this.searchEmp(data, term), filter )     //фильтруем данные по поиску
        return (
            <div className='app'>
                <AppInfo 
                sumEmployees = {sumEmployees}
                increased = {increased}/>

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} filterState={this.filterState}/>
                </div>

                <EmployeesList
                    data={visibleData}       //показываем отфильтрованные данные
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