import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Button,
    Container,
    Grid,
    List,
    ListItem,
    Snackbar,
    TextField,
    Typography,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';


let initialValues = {
    name: '',
    course: ''
};

export default function CadastroAlunos() {
    useEffect(() => {
        initialValues = {
        };
    }, []);

    const history = useHistory();

    return (
        <Container maxWidth="md">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => {
                }}
            >
                {({ values }) => (
                    <Form>

                    </Form>
                )}
            </Formik>
        </Container>
    );
}
