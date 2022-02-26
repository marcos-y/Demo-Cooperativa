import React,{useEffect,useState} from 'react';
import Table from '../../Components/Table/Table';
import Drawer from '../../Components/Drawer/Drawer';
import TextfieldIcon  from '../../Components/Textfields/TextfieldIcon';

const KilosFinales = () =>{

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
        col: 'Nombre del cereal',
        index:4,
        },
        {
        col: 'Cosecha ',
        index:5,
        },
        {
        col: 'Kilos',
        index:6,
        },
    ]

    const rows = [
        {
            name:'Socio',
            values: [159, 'Sucesion de Frau,Bernardo Luis', 'Trigo', 159, 6.0],
            id:0, 
        },
        {
            name:'Socio',
            values: [200, 'Sucesion de Frau,Bernardo Luis', 'Trigo', 159, 6.0],
            id:1,
        },
        {
            name:'Socio',
            values: [203, 'Sucesion de Frau,Bernardo Luis', 'Trigo', 159, 6.0],
            id:2,
        },
        {
            name:'Socio',
            values: [210, 'Sucesion de Frau,Bernardo Luis' , 'Soja', 159, 6.0],
             id:3,
        },
        {
            name:'Socio',
            values: [300, 'AYALA,JOSE', 'Soja', 159, 6.0],
            id:4,
        },
        {
            name:'Socio',
            values: [340,'PEREZ,OSCAR' , 'Soja', 159, 10],
             id:5,
        },
        {
            name:'No Socio',
            values: [ 350, 'MARTINEZ, JOSE ANTONIO','Maiz', 159, 10],
             id:6,
        },
        {
            name:'No Socio',
            values: [ 370, 'MIGUEZ, RUBEN EUGENIO','Maiz', 159, 25],
            id:7,
        },
        {
            name:'No Socio',
            values: [380,'RODRIGUEZ,MARIANO','Maiz', 159, 25],
            id:8,
        },
        {
            name:'No Socio',
            values: [400, 'SALINAS,OLGA','Maiz', 159, 25],
            id:9 ,
        },
        {
            name:'No Socio',
            values: [405, 'WALCONS S.R.L.','Maiz', 159, 6.0],
            id:10 ,
        },
    ]

    const [search,setSearch] = useState('');
    const handleChangeSearch = (event) => setSearch(event.target.value);

    return(
        <>
        <div style={{marginTop:'10px'}}>
            <Drawer ></Drawer>
            <TextfieldIcon search={search} handleChangeSearch={handleChangeSearch}></TextfieldIcon>
            <h2 style={{float:'right',marginRight:'10px'}}>Kilos finales</h2>
        </div>
        <Table search={search} columns={columns} rows={rows}/>
        </>
    )
}
export default KilosFinales;