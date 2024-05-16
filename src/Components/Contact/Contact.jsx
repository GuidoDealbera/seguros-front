import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const inputs = [
    {
      name: "name",
      value: input.name,
      type: "text",
      placeholder: "Nombre",
    },
    {
      name: "email",
      value: input.email,
      type: "email",
      placeholder: "Correo Electrónico",
    },
    {
      name: "subject",
      value: input.subject,
      type: "text",
      placeholder: "Asunto",
    },
    {
      name: "message",
      value: input.message,
      type: "text",
      placeholder: "Mensaje",
    },
  ];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      [name]: value,
    });
  };
  return (
    <div id="contact" className="w-screens flex flex-col justify-center items-center gap-5">
      <h1 className="text-white font-black text-2xl uppercase">Contacta<span className="text-[#F90607]">me</span></h1>
      <div className="min-w-64 max-w-[600px] w-full px-2 min-[400px]:px-10 flex flex-col md:flex-row">
        <form className="flex flex-col flex-1 gap-5">
          {inputs.map(({ name, value, type, placeholder }, i) =>
            i !== inputs.length - 1 ? (
              <input
                key={i}
                name={name}
                value={value}
                type={type}
                className="outline-none px-2 py-1 rounded-full font-semibold"
                placeholder={placeholder}
                onChange={handleInputChange}
              />
            ) : (
              <textarea
                key={i}
                name={name}
                value={value}
                type={type}
                className="outline-none px-2 py-1 rounded-xl resize-none h-48 font-semibold"
                placeholder={placeholder}
                onChange={handleInputChange}
              ></textarea>
            )
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
