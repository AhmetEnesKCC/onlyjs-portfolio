import React from "react";
import "@/styles/styles.scss";

const ContactForm = () => {
  return (
    <div>
      <h5 className="text-2xl font-semibold">
        Contact me, let’s make magic together
      </h5>
      <input
        placeholder="Name:"
        type="text"
        className="bg-subtle px-3 outline-none input-border text-white placeholder:text-input w-full h-[48px] rounded-md mt-4"
      />
      <input
        placeholder="Email:"
        type="text"
        className="bg-subtle input-border px-3 outline-none text-white placeholder:text-input w-full h-[48px] rounded-md mt-4"
      />
      <textarea
        placeholder="Message:"
        className="bg-subtle px-3 input-border outline-none text-white resize-none placeholder:text-input w-full min-h-[120px] rounded-md mt-4"
      />
      <button className="bg-primary px-6 py-1 rounded-md mt-3">Send</button>
    </div>
  );
};

export default ContactForm;
