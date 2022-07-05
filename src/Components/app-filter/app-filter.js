
import { getAllByAltText } from '@testing-library/react';
import './app-filter.css';

const AppFilter = (props) => {

    const buttonElems = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen3000', label: 'З/п больше 1000$' }
    ]

    const buttons = buttonElems.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.filterState(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}

export default AppFilter;