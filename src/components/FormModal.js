import React from "react";
import { useFormik } from "formik";
import { Button, Modal, Container, Form } from "semantic-ui-react";
import * as Yup from "yup";

const FormModal = ({ open, setOpen, onClickOrder }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      repeatEmail: "",
      phone: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      email: Yup.string()
        .email("No es un correo valido")
        .required("El correo es obligatorio")
        .oneOf([Yup.ref("repeatEmail")], "Los correos no son iguales"),
      repeatEmail: Yup.string()
        .email("No es un correo valido")
        .required("El correo es obligatorio")
        .oneOf([Yup.ref("email")], "Los correos no son iguales"),
      phone: Yup.number().required("El telefono es obligatorio"),
    }),
    onSubmit: (formData) => {
      onClickOrder(formData);
    },
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="teal">Checkout</Button>}
    >
      <Modal.Header>Ingrese sus datos para la compra</Modal.Header>
      <Modal.Content>
        <Container
          style={{
            padding: "20px",
            margin: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form style={{ width: "50%" }}>
            <Form.Input
              type="text"
              placeholder="Nombre y apellidos"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Form.Input
              type="text"
              placeholder="Correo electronico"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Form.Input
              type="text"
              placeholder="Repetir correo electronico"
              value={formik.values.repeatEmail}
              name="repeatEmail"
              onChange={formik.handleChange}
              error={formik.errors.repeatEmail}
            />
            <Form.Input
              type="number"
              placeholder="Numero telefonico"
              value={formik.values.phone === 0 ? "" : formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              error={formik.errors.phone}
            />
          </Form>
        </Container>
      </Modal.Content>
      <Modal.Actions>
        <Button color="teal" onClick={formik.handleReset}>
          Limpiar
        </Button>
        <Button
          color="black"
          onClick={() => {
            setOpen(false);
            formik.handleReset();
          }}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          content="Realizar comprar"
          labelPosition="right"
          icon="checkmark"
          positive
          onClick={formik.handleSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default FormModal;
