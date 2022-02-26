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
        col: 'Numero de autorizacion',
        index:4,
        },
        {
        col: 'Numero de registro ',
        index:5,
        },
        {
        col: 'Nombre del cereal',
        index:6,
        },
        {
        col: 'Cosecha',
        index:7,
        },
        {
        col: 'Fecha de autorizacion',
        index:8,
        },
        {
        col: 'Fecha estimada de vencimiento',
        index:9,
        },
        {
        col: 'Kilos autorizados',
        index:10,
        },
        {
        col: 'Kilos canje',
        index:11,
        },
        {
        col: 'Kilos liquidados',
        index:12,
        },
        {
        col: 'Kilos saldos',
        index:13,
        },
        {
        col: 'Precios de referencia',
        index:14,
        },
    ]

      const rows = [
        {
            name:'Socio',
            values: [159, 'Sucesion de Frau,Bernardo Luis',3423,1, 'Soja',
             '11/12','24/11/2021','24/12/2022','3450,00','0,00','0,00','233,00','759,00' ],
            id: 0, 
        },
        {
            name:'Socio',
            values: [200, 'Sucesion de Frau,Bernardo Luis', 3500,1, 'Trigo',
             '06/12','24/11/2021','2/11/2022','2354,00','0,00','0,00','10023,00','4030,00'],
            id: 0,
        },
        {
            name:'Socio',
            values: [203, 'Sucesion de Frau,Bernardo Luis', 3501,1, 'Maiz',
             '01/12','24/11/2021','24/11/2022','12000,00','0,00','0,00','1232,00','759,00'],
            id: 0,
        },
        {
            name:'Socio',
            values: [210, 'Sucesion de Frau,Bernardo Luis' , 3650,1, 'Soja',
             '01/12','24/11/2021','24/11/2022','124,00','0,00','0,00','1233,00','40000'],
            id: 0,
        },
        {
            name:'Socio',
            values: [300, 'AYALA,JOSE', 3743, 1,'Maiz',
             '05/11','15/11/2021','24/11/2022','1577,00','0,00','0,00','12334,00','540,00'],
            id: 0,
        },
        {
            name:'Socio',
            values: [340,'PEREZ,OSCAR' , 4500,1,'Girasol',
             '26/12','22/11/2021','24/11/2022','1054,00','0,21','235346','0,00','9000,00'],
            id: 0,
        },
        {
            name:'No Socio',
            values: [ 350, 'MARTINEZ, JOSE ANTONIO',4501, 1,'Maiz',
             '28/12','26/11/2021','24/11/2022','23889,00','0,00','1232','0,00','28400'],
            id: 0,
        },
        {
            name:'No Socio',
            values: [ 370, 'MIGUEZ, RUBEN EUGENIO',4540, 1,'Soja',
             '25/10','17/11/2021','24/11/2022','10000,00','123','2234','0,00','12000'],
            id: 0,
        },
        {
            name:'No Socio',
            values: [380,'RODRIGUEZ,MARIANO',5777,1,'Trigo Pan',
             '30/12','24/11/2021','24/11/2022','550,00','5522','0,00','0,00','12333'],
            id: 0,
        },
        {
            name:'No Socio',
            values: [400, 'SALINAS,OLGA',8921,1,'Trigo Pan',
             '12/12','18/11/2021','24/11/2022','145,00','0,00','0,00','1232,00','2380,00'],
            id: 0,
        },
        {
            name:'No Socio',
            values: [405, 'WALCONS S.R.L.',9001,1,'Maiz',
             '24/12','24/11/2021','24/11/2022','20359,00','2000','2223','1222,00','1222,00'],
            id: 0,
        },
    ]

    const [search,setSearch] = useState('');
    const handleChangeSearch = (event) => setSearch(event.target.value);

    return(

        <>
        <div style={{marginTop:'10px'}}>
            <Drawer></Drawer>
            <TextfieldIcon search={search} handleChangeSearch={handleChangeSearch}></TextfieldIcon>
            <h2 style={{float:'right',marginRight:'10px'}}>Autorizaciones</h2>
        </div>
        <Table search={search} columns={columns} rows={rows}/>
        </>
    )
}

export default EstadoCuentas;