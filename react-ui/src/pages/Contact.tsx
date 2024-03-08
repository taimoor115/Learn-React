
const ContactUs = () => {
  return (
    <div className="text-white contact-us-container p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions or feedback? Reach out to us using the contact
        information below:
      </p>
      <div className="flex items-center mb-4">
        <svg
          className="h-6 w-6 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14h4v4h-4z"></path>
        </svg>
        <span>Email: info@example.com</span>
      </div>
      <div className="flex items-center">
        <svg
          className="h-6 w-6 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-10.5h6m-3 3v-6"></path>
        </svg>
        <span>Phone: +1 (123) 456-7890</span>
      </div>
    </div>
  );
};

export default ContactUs;
