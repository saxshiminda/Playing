import React from 'react'
import dummyData from '../../data/data.json' 

export default function Table( props ){
    return (
        <table className='table table-bordered'>
            <Header columns={props.columns} />
            <Body props={props} />
        </table>
    )
}

function Header(columns) {
    return (
        <thead>
            <tr >
                { columns.columns.map((column, index) => {
                    return (
                        <th scope="col" key={index}>{column[0]}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

function Body( {props} ) {
    return (
        <tbody className='tableBody'>
            {/* <tr onClick={ () => {props.handleClick(12)}}>12</tr> */}
            { props.rows.map((rows, index) => {
                return (
                    <tr className='singleRow' key={index} onDoubleClick={ () => { props.handleClick([rows, props.columns]) } }>
                        <td>{rows.idDrink}</td>
                        <td>{rows.strDrink}</td>
                        <td className='rowImage'><img src={rows.strDrinkThumb}></img></td>
                    </tr>
                ) 
            })}
        </tbody>
    )
}