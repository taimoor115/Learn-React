import Header from "../Component/Header";

const Form = () => {
  return (
    <>
      <Header name="Sign Up" className="text-white text-center text-3xl" />
      <div className="flex justify-evenly w-full text-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex flex-col items-center gap-3 p-3">
            <div>
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input  w-full max-w-xs"
              />
            </div>
            <div>
              <button
                className="btn text-white btn-neutral sm:btn-sm md:btn-md lg:btn-wide"
                value="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <img
            src="/public/forms.webp"
            className="hidden lg:flex md:flex"
            alt="pic"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
