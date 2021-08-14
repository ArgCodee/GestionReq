import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';


const useStyles = theme => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputReq: {
        width: '50%'
    }
});



class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Requerimiento: '',
            Titulo: '',
            Segmento: '',
            Plataforma: '',
            Fabrica: '',
            Complejidad: '',
            Estatus: '',
            modalInsertar: false,
            modalEditar: false,
            modalEliminar: false,
            mensaje: '',
            dataReqs: [
                { id: 1, Requerimiento: "168057", Titulo: 'OFR - PROYECTO DALIA (SEPTIEMBRE)', Segmento: 'Prepago', Plataforma: 'SG', Fabrica: 'TEMM', Complejidad: 'Media', Estatus: 'En Curso' },
                { id: 2, Requerimiento: "167107", Titulo: 'OFR - REPLICAR PILOTO CANCÚN EN PLAZA NORTE', Segmento: 'Prepago', Plataforma: 'SG/SDP', Fabrica: 'TEMM', Complejidad: 'Alta', Estatus: 'En Curso' },
            ]
        };
    }

    componentDidMount() {
        this.setState({
            mensaje: `Numero de requerimientos: ${this.state.dataReqs.length}`
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.dataReqs !== prevState.dataReqs) {
            this.setState({
                mensaje: `Numero de requerimientos: ${this.state.dataReqs.length}`
            })
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

 
    borrarNombreDeLista = (key) => {
        const copiaDeReq = [...this.state.dataReqs];
        copiaDeReq.splice(key, 1);

        this.setState({
            dataReqs: copiaDeReq
        });
    };

    /* abrirCerrarModalInsertar=()=>{
        const modalinstEstado = this.state.modalInsertar
        this.state.modalInsertar = !modalinstEstado
        console.log(modalinstEstado)
    }
 */
    ReqInserta = classes => (
        <div >
            <h3>Agregar Nuevo Requerimiento</h3>
            <TextField className={classes.inputReq} name="Requerimiento" label="Requerimiento" onChange={this.handleChange} />
            <br />
            <TextField className={classes.inputReq} name="Titulo" label="Titulo" onChange={this.handleChange} />
            <br />
            <TextField className={classes.inputReq} name="Segmento" label="Segmento" onChange={this.handleChange} />
            <br />
            <TextField className={classes.inputReq} name="Plataforma" label="Plataforma" onChange={this.handleChange} />
            <br />
            <TextField className={classes.inputReq} name="Fabrica" label="Fabrica" onChange={this.handleChange} />
            <br />
            <TextField className={classes.inputReq} name="Complejidad" label="Complejidad" onChange={this.handleChange} />
            <br />
            <TextField name="Estatus" label="Estatus" onChange={this.handleChange} />
            <br /><br />
            <div align="right">
                <Button color="primary" >Insertar</Button>
                <Button >Cancelar</Button>
            </div>
        </div>
    )

    render() {
        return (
            <div>
                <br />
                <Button >Insertar</Button>
                <br /><br />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Requerimiento</TableCell>
                                <TableCell>Titulo</TableCell>
                                <TableCell>Segmento</TableCell>
                                <TableCell>Plataforma</TableCell>
                                <TableCell>Fabrica</TableCell>
                                <TableCell>Complejidad</TableCell>
                                <TableCell>Estatus</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.dataReqs.map((data, key) => (
                                <TableRow key={key}>
                                    <TableCell>{data.Requerimiento}</TableCell>
                                    <TableCell>{data.Titulo}</TableCell>
                                    <TableCell>{data.Segmento}</TableCell>
                                    <TableCell>{data.Plataforma}</TableCell>
                                    <TableCell>{data.Fabrica}</TableCell>
                                    <TableCell>{data.Complejidad}</TableCell>
                                    <TableCell>{data.Estatus}</TableCell>
                                    <TableCell>
                                        <Edit /*className= {classes.iconos}  */ />
                                        &nbsp;&nbsp;&nbsp;
                                        <Delete /*className= {classes.iconos}*/ onClick={() => this.borrarNombreDeLista(key)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {this.state.mensaje}
            </div>
        )
    }
}


export default Formulario;