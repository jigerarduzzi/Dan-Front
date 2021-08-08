
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductoAlta from './ProductoAlta';
import EmitirOrden from './EmitirOrden';

const Producto = () => {
    return(
        <Grid container direction="column">
            <Grid item >
                <ProductoAlta></ProductoAlta>
                <EmitirOrden></EmitirOrden>
            </Grid>
            <Grid item>
                <h1>Holu</h1>
            </Grid>
        </Grid>
    )
}

export default Producto;