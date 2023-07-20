import { useForm } from "react-hook-form";
import style from "./styles/ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className={style.form_container} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="FirstName" {...register("FirstName")} />
      <input placeholder="LastName" {...register("LastName")} />
      <input placeholder="Email" {...register("Email", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <textarea
        placeholder="Message"
        {...register("Message", { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default ContactForm;
