
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductoAlta from './ProductoAlta';
import EmitirOrden from './EmitirOrden';

const Producto = () => {
    return(
        <Grid container direction="column">
            <Grid container>
                <ProductoAlta></ProductoAlta>
                <EmitirOrden></EmitirOrden>
            </Grid>
            <Grid item>
                <h1>Agregar Listado de ordenes</h1>
            </Grid>
        </Grid>
    )
}

export default Producto;