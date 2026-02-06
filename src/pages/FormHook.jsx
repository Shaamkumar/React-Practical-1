import { useForm } from "react-hook-form";

export default function FormHook() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("name", { required: true })}
        placeholder="Name"
      />
      {errors.name && <p>Required</p>}

      <input
        {...register("email", { required: true })}
        placeholder="Email"
      />
      {errors.email && <p>Required</p>}

      <input
        type="password"
        {...register("password", { required: true, minLength: 6 })}
        placeholder="Password"
      />

      {errors.password?.type === "required" && <p>Password is Required</p>}
      {errors.password?.type === "minLength" && <p>Min 6 Characters</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
