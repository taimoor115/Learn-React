import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onHandleSubmit = (data: FieldValues) => console.log(data);

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });
  // const handleOnSubmit = (event: FormEvent) => {
  //   event.preventDefault();

  //   console.log(person);

  //   // if (nameRef.current !== null) console.log(nameRef.current.value);
  //   // if (ageRef.current !== null) console.log(ageRef.current.value);
  // };
  return (
    <>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* ref={nameRef} */}
          <input
            // onChange={(event) =>
            //   setPerson({ ...person, name: event.target.value })
            // }
            // value={person.name}
            {...register("name", { required: true, minLength: 3 })}
            type="text"
            id="name"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The Field name is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              Character should be greater than 3 characters
            </p>
          )}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              {...register("age", { required: true })}
              // ref={ageRef}
              // onChange={(event) =>
              //   setPerson({ ...person, age: event.target.value })
              // }
              // value={person.age}
              type="number"
              id="age"
              className="form-control"
            />
            {errors.name?.type === "required" && (
              <p className="text-danger">The Field name is required</p>
            )}
          </div>
        </div>

        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
