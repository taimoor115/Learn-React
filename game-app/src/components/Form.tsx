import { FormEvent, useRef, useState } from "react";

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);

    // if (nameRef.current !== null) console.log(nameRef.current.value);
    // if (ageRef.current !== null) console.log(ageRef.current.value);
  };
  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* ref={nameRef} */}
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            type="text"
            id="name"
            className="form-control"
          />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              // ref={ageRef}
              onChange={(event) =>
                setPerson({ ...person, age: event.target.value })
              }
              value={person.age}
              type="number"
              id="age"
              className="form-control"
            />
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
