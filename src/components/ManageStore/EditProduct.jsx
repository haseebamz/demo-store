import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"

function EditProduct({ product }) {

    const initialValues = {
        name: product.title,
        image: product.image,
        price: product.price,
        category :product.category,
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        price: Yup.number().typeError("Price must be a number").required("Price is required"),
        name: Yup.string().required("Name is required"),
    })


    return (
        <>
            {product?product.id : ""}
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form>
                        <Field name="name" className="form-control mb-3" ></Field>
                        <ErrorMessage component="div" name='name' className='errorMessage' ></ErrorMessage>
                        <Field name="category" className="form-control mb-3" readOnly ></Field>
                        <img src={product.image} alt={product.title} width={50} height={50} />
                        <Field name="price" className="form-control my-3"  ></Field>
                        <ErrorMessage component="div" name='price' className='errorMessage'  ></ErrorMessage>
                        <button type='submit' >Save</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default EditProduct