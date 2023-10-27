import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be greater than 3 character" }),
  age: z.number({ invalid_type_error: "Age must be enter" }).min(18),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              // {...register("age", { required: true })}
              {...register("age", { valueAsNumber: true })}
              // ref={ageRef}
              // onChange={(event) =>
              //   setPerson({ ...person, age: event.target.value })
              // }
              // value={person.age}
              type="number"
              id="age"
              className="form-control"
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>
        </div>

        <button disabled={!isValid} className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
