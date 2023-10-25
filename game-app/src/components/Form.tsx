const Form = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-control" />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input type="number" id="age" className="form-control" />
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
