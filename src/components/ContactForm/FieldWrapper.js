import React from 'react'
import { useFormikContext } from 'formik'
import {TextField} from "@mui/material";

export default (props) => {
    const { errors, touched } = useFormikContext()
    return (
        <TextField
            {...props}
            margin={'dense'}
            variant={'filled'}
            fullWidth
            sx={{
                width: '100%'
            }}
            error={touched[props.name] && Boolean(errors[props.name])}
            helperText={touched[props.name] && errors[props.name]}
        />
    )
}
