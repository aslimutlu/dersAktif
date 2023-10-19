import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const addProductVAlidationSchema = Yup.object().shape({
  name: Yup.string().required("Boş geçilemez."),
  unitPrice: Yup.string().required("Boş geçilemez."),
  stock: Yup.string().required("Boş geçilemez.").min(0, 'Sıfırdan küçük olamaz!').matches(
    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
    "Number formatta olamlı!"),
  quantityPerUnit: Yup.string().required("Boş geçilemez.").matches(
    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
    "Number formatta olamlı!"),

});

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
      stock: "",
      quantityPerUnit: "",
    },
    validationSchema: addProductVAlidationSchema,
    onSubmit: (values) => {
      axios.post("https://northwind.vercel.app/api/products", values).then((res) => {
        console.log("Kayıt Başarılı!");
      });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          />
          {formik.errors.unitPrice ? (
            <p style={{ color: "red" }}>{formik.errors.unitPrice}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">Stock</label>
          <input
            type="number"
            name="stock"
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
          {formik.errors.stock ? (
            <p style={{ color: "red" }}>{formik.errors.stock}</p>
          ) : (
            <></>
          )}
          
        </div>
        <div>
          <label htmlFor="">Quantity Per Unit</label>
          <input
            type="text"
            name="quantityPerUnit"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit}
          />
          {formik.errors.quantityPerUnit ? (
            <p style={{ color: "red" }}>{formik.errors.quantityPerUnit}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
