import { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/0c832db0-2ac9-11ed-a7a0-3f26160640a2"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="flex justify-center w-full bg-white pt-20 flex-col">
        <div>
        <h2 className="flex justify-center text-[#F8780E]">Please contact us</h2>
        </div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0  flex justify-center align-middle content-center">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="px-3 placeholder-[#06176D] text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          required
        />
      </div>
      <div className="mb-3 pt-0  flex justify-center align-middle content-center ">
        <div className="flex flex-col">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
          name="tel"
          className="px-3 placeholder-[#06176D] text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          required
        />
        <small className="pl-3">Format: 123-456-7890</small>
        </div>

      </div>
      <div className="mb-3 pt-0 flex justify-center align-middle content-center">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="px-3 py-3 placeholder-[#06176D] text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0 flex justify-center align-middle content-center">
        <textarea
          placeholder="Description of your project"
          name="message"
          className="px-3 py-3 placeholder-[#06176D] text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
          required
        />
      </div>
      <div className="mb-3 pt-0 flex justify-center align-middle content-center">
        <button
          className="bg-[#06176D] text-white active:bg-[#06176D] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;