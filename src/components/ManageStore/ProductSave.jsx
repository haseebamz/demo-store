import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import * as Yup from "yup"

function ProductSave({ product }) {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fileInputRef = useRef();


    const defaultValues = {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: null,
    };

    const [initialValues, setinitialValues] = useState(defaultValues)

    useEffect(() => {
        if (product.id > 0) {
            setinitialValues({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
            })
        } else {
            setinitialValues(defaultValues)
        }
    }, [product])



    const handleSubmit = async (values, { resetForm }) => {
        try {
            if (product.id === 0) {
                const response = await axios.post(`${API_BASE_URL}/products`, values);
                console.log(response)
                resetForm();
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                }
                toast.success("Product has been added")

            } else {
                const response = await axios.put(`${API_BASE_URL}/products/${values.id}`, values);
                console.log(response);
                // if (fileInputRef.current) {
                //     fileInputRef.current.value = ""
                // }
                toast.success("Product has been updated")
            }
        } catch (error) {
            console.error(error)
            toast.error("Error updating the product")
        }
    }




    const validationSchema = Yup.object({
        id: Yup.number().moreThan(0, "ID could not be 0").required("ID is required").positive("ID must be positive"),
        price: Yup.number().typeError("Price must be a number").required("Price is required"),
        title: Yup.string().required("Name is required"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("Description is required"),
        image: Yup.mixed()
            .required("Image is required")
            .test("fileSize", "File size is too large", (file) => {
                return file && file.size <= 2 * 1024 * 1024; // 2MB
            })
            .test("fileType", "Unsupported file format", (file) => {
                return (
                    file &&
                    ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type)
                );
            }),
    })


    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({ values, setFieldValue }) => {



                    return (

                        <Form>
                            <div className="row">
                                <div className="col-md-6">  <label htmlFor="id">ID</label>
                                    <Field name="id" id="id" className="form-control mb-3"  ></Field>
                                    <ErrorMessage component="div" name='id' className='errorMessage' ></ErrorMessage></div>
                                <div className="col-md-6"> <label htmlFor="name">Name</label>
                                    <Field name="title" id="name" className="form-control mb-3" ></Field>
                                    <ErrorMessage component="div" name='title' className='errorMessage' ></ErrorMessage></div>
                                <div className="col-md-6"> <label htmlFor="price">Price</label>
                                    <Field name="price" id="price" className="form-control mb-3"  ></Field>
                                    <ErrorMessage component="div" name='price' className='errorMessage'  ></ErrorMessage></div>
                                <div className="col-md-6"><label htmlFor="category">Category</label>
                                    <Field name="category" id="category" placeholder="" className="form-control mb-3"  ></Field>
                                    <ErrorMessage name='category' component="div" className='errorMessage' ></ErrorMessage></div>
                            </div>



                            <label htmlFor="description">Description</label>
                            <Field name="description" id="description" as="textarea" className="form-control mb-3"  ></Field>
                            <ErrorMessage name='description' component="div" className='errorMessage' ></ErrorMessage>


                            <input type="file" name="image" accept='image/*' ref={fileInputRef} onChange={(e) => {
                                const file = e.currentTarget.files[0];
                                setFieldValue("image", URL.createObjectURL(file))
                            }} />
                            <ErrorMessage name='image' component="div" className='errorMessage' ></ErrorMessage>

                            {values.image && (
                                <img src={typeof values.image === "string" ? values.image : URL.createObjectURL(values.image)} alt='preview' width={100}
                                    height={100}
                                />
                            )}


                            <button className='CustomBtn btnBgPrimary d-block mt-3' type='submit' >Save</button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default ProductSave