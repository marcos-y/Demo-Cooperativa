import React,{useState} from 'react';
import Table from '../../Components/Table/Table';
import Drawer from '../../Components/Drawer/Drawer';
import TextfieldIcon  from '../../Components/Textfields/TextfieldIcon';

const EstadoCuentas = () =>{

    const columns = [
        {
        col: 'Categoría',
        index:1,
        },
        {
        col: 'Codigo de cuenta',
        index:2,
        },
        {
        col: 'Razon social',
        index:3,
        },
        {
        col: 'Saldo vencido',
        index:4,
        },
        {
        col: 'Saldo a vencer ',
        index:5,
        },
        {
        col: 'Saldo total',
        index:6,
        },
    ]
    

    const rows = [
        {
            name:'Socio',
            values: [159, 'Sucesion de Frau,Bernardo Luis', '-1230', '0,00', '0,00'],
            id: 1,
        },
        {
            name:'Socio',
            values: [200, 'Sucesion de Frau,Bernardo Luis', '12342', '0,00', '130567,55'],
            id: 2,
        },
        {
            name:'Socio',
            values: [203, 'Sucesion de Frau,Bernardo Luis', '50340', '-250', '659233,77'],
            id: 3,
        },
        {
            name:'Socio',
            values: [210, 'Sucesion de Frau,Bernardo Luis' , '12500', '-6000', '0,00'],
            id: 4,
        },
        {
            name:'Socio',
            values: [300, 'AYALA,JOSE', '11100', '1820.00', '50000'],
            id: 4,
        },
        {
            name:'Socio',
            values: [340,'PEREZ,OSCAR' , '1200', '2000', '3200,45'],
            id: 5,
        },
        {
            name:'No Socio',
            values: [ 350, 'MARTINEZ, JOSE ANTONIO','-150', '3450', '-14500,50'],
            id: 6,
        },
        {
            name:'No Socio',
            values: [ 370, 'MIGUEZ, RUBEN EUGENIO','0,00', '-1511', '0,00'],
            id: 7,
        },
        {
            name:'No Socio',
            values: [380,'RODRIGUEZ,MARIANO','0,00', '-100', '0,00'],
            id: 8,
        },
        {
            name:'No Socio',
            values: [400, 'SALINAS,OLGA','0,00', '159', '0,00'],
            id: 9,
        },
        {
            name:'No Socio',
            values: [405, 'WALCONS S.R.L.','0,00', '159', '0,00'],
            id: 10,
        },
    ]

    const [search,setSearch] = useState('');
    const handleChangeSearch = (event) => setSearch(event.target.value);

    return(
        <>
        <div style={{marginTop:'10px'}}>
            <Drawer></Drawer>
            <TextfieldIcon search={search} handleChangeSearch={handleChangeSearch}></TextfieldIcon>
            <h2 style={{float:'right',marginRight:'10px'}}>Estado de cuentas</h2>
        </div>
        <Table search={search} columns={columns} rows={rows}/>
        </>
    )
}

export default EstadoCuentas;