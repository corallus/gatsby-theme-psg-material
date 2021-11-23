import React from 'react'
import {Formik, Field} from 'formik'
import * as Yup from 'yup'
import Recaptcha from "react-recaptcha"
import axios from 'axios'
import { Helmet } from 'react-helmet';
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Link} from "@mui/material";

import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";
import privacyStatement from 'gatsby-theme-psg/src/assets/privacy-statement.pdf'

import FieldWrapper from './FieldWrapper'

export const ResponseForm = () => {
    const {domain, recaptchaSiteKey} = useSiteMetadata()

    const api = `https://wlpbkbt4zc.execute-api.eu-central-1.amazonaws.com/production/contact`

    return (
        <Formik
            initialValues={{
                privacy: false,
                recaptcha: "",
                to: `info@${domain}`,
                response: {
                    naam: "",
                    email: "",
                    telefoonnummer: "",
                    bericht: ""
                }
            }}
            onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
                const httpOptions = {
                    headers: {
                        'Content-Type': 'application/json',
                        'g-recaptcha': values.recaptcha,
                    }
                };

                axios.post(api, values, httpOptions)
                    .then(res => {
                        setSubmitting(false);
                        resetForm({})
                        setStatus({ message: 'Het formulier is succesvol verstuurd' })
                    })
                    .catch(error => {
                        setStatus({ message: error.response.data })
                        setSubmitting(false)
                    });
            }}

            validationSchema={Yup.object().shape({
                response: Yup.object().shape({
                    naam: Yup.string()
                        .required('Verplicht'),
                    email: Yup.string()
                        .email('Geen juist mail adres')
                        .required('Verplicht'),
                    telefoonnummer: Yup.string(),
                    bericht: Yup.string()
                        .required('Verplicht'),
                }),
                privacy: Yup.boolean()
                    .oneOf([true], 'U dient akkoord te gaan met de privacy voorwaarden'),
                recaptcha: Yup.string()
                    .required('Verifieer dat je geen robot bent'),
            })}
        >
            {props => {
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
                        <Helmet>
                            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        </Helmet>

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
                            <Recaptcha
                                sitekey={recaptchaSiteKey}
                                render="explicit"
                                theme="light"
                                verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                onloadCallback={() => { console.log("done loading!"); }}
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
            }}
        </Formik>
    )
}