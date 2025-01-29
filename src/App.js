import { useState, useEffect } from 'react';

import './App.css';
import './components/Table/Table.css';
import './components/Dialog/Dialog.css';

import Table from './components/Table/Table';
import Dialog from './components/Dialog/Dialog';


export default function Reports(){
    // TODO
    // create side menu
    // create several pages
    // remove pages data from here

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
                const result = await response.json();
                setRows(result.drinks); // Update state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    const Columns = [
        ['ID',    'test'],
        ['Name',     'test'],
        ['Preview', 'test'],
    ]

    const [toggleDialog, setToggleDialog] = useState();
    const [dialogData, setDialogData]     = useState();

    function tableClick( Param ){
        setDialogData(Param);

        setToggleDialog(true);
    }    

    return (
        <>
            <div className='TableContainer'>
                <Table columns={Columns} rows={rows} handleClick={tableClick}/>
            </div>

            { toggleDialog ? <Dialog data={dialogData} toggleDialog={setToggleDialog} /> : '' }
        </>
    )

}