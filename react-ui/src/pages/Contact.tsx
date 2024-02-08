import Header from "../Component/Header";

const Contact = () => {
  return (
    <>
      <Header name="Contact Us" />
      <div className="flex justify-center items-center gap-24">
        <form className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-accent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-accent"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-accent lg:textarea-lg"
            />
          </div>
          <div>
            <button className="btn btn-accent lg:btn-wide" type="submit">
              Send
            </button>
          </div>
        </form>
        <div className="overflow-hidden">
          <img src="/public/per.png" />
        </div>
      </div>
    </>
  );
};

export default Contact;
