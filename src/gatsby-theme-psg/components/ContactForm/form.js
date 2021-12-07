import React from 'react'
import {Field} from 'formik'
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Link} from "@mui/material";

import privacyStatement from 'gatsby-theme-psg/src/assets/privacy-statement.pdf'

import FieldWrapper from './FieldWrapper'
import RenderCaptcha from "gatsby-theme-psg/src/components/ContactForm/recaptcha";

const ResponseForm = (props) => {
    const {
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        setFieldValue,
        status,
        handleChange,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <FieldWrapper id="naam" label="Naam" name="response.naam" type="text" />
            <FieldWrapper id="email" label="Email" name="response.email" type="email" />
            <FieldWrapper id="telefoonnummer" label="Telefoonnummer" name="response.telefoonnummer" type="tel" />
            <FieldWrapper id="bericht" label="Bericht" name="response.bericht" rows={5} multiline />

            <FormControl
                required
                error={errors.privacy && touched.privacy}
            >
                <FormControlLabel
                    control={
                        <Field
                            component={Checkbox}
                            type={"checkbox"}
                            id={"privacy"}
                            onChange={handleChange}
                            name="privacy"
                            required
                        />
                    }
                    label={<>Ik ga akkoord met de <Link href={privacyStatement}> privacy voorwaarden</Link></>}
                />
                {(errors.privacy && touched.privacy) &&
                <FormHelperText>
                    {errors.privacy}
                </FormHelperText>
                }
            </FormControl>

            <FormControl>
                <RenderCaptcha
                    verifyCallback={(response) => setFieldValue("recaptcha", response)}
                />
            </FormControl>

            <Box
                textAlign={'center'}
                marginTop={1}
            >
                <Button
                    color={'primary'}
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    size={'large'}
                >
                    {isSubmitting ? 'Aan het versturen…' : 'Versturen'}
                </Button>
            </Box>
            {status && status.message &&
            <div>{status.message}</div>
            }
        </form>
    )
}

export default ResponseForm