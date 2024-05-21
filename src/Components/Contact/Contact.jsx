import { useEffect, useRef, useState } from "react";

const key = import.meta.env.VITE_EMAIL_TOKEN;
// const URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [containKey, setContainKey] = useState(false);
  const [files, setFiles] = useState([]);
  const fileRef = useRef(null);
  useEffect(() => {
    console.log(files)
  }, [files])
  useEffect(() => {
    const params = new URLSearchParams(window.location.search).get("key");
    if (params && params === key) {
      setContainKey(true);
    }
  }, [containKey]);
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
      ...input,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const fileButtonClick = () => {
    if (fileRef) {
      fileRef.current.click();
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    // const bodyParams = {
    //   ...input,
    //   urgent: containKey
    // }
  }
  return (
    <div id="contact" className="flex flex-col justify-center items-center gap-5 py-10 bg-gray-400">
      <h1 className="text-white font-black text-2xl uppercase">
        Contacta<span className="text-[#F90607]">me</span>
      </h1>
      <div className="min-w-64 max-w-[600px] w-full px-2 min-[400px]:px-10 flex flex-col md:flex-row">
        <form onSubmit={onSubmit} className="flex flex-col flex-1 gap-5">
          {inputs.map(({ name, value, type, placeholder }, i) =>
            i !== inputs.length - 1 ? (
              <input
                key={i}
                name={name}
                value={value}
                type={type}
                className={`outline-none px-2 py-1 rounded-full font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all ${
                  value ? "shadow-inner shadow-black/70" : ""
                }`}
                placeholder={placeholder}
                onChange={handleInputChange}
                required
              />
            ) : (
              <textarea
                key={i}
                name={name}
                value={value}
                type={type}
                className={`outline-none px-2 py-1 rounded-xl resize-none h-48 font-semibold shadow-sm focus:shadow-inner focus:shadow-black/70 shadow-black/70 transition-all ${
                  value ? "shadow-inner shadow-black/70" : ""
                }`}
                placeholder={placeholder}
                onChange={handleInputChange}
                required
              ></textarea>
            )
          )}
          <input
            type="file"
            id="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
            ref={fileRef}
          />
          <section className="w-full -translate-y-4 flex items-center justify-center">
          <button type="button" onClick={fileButtonClick} className="w-fit flex justify-center items-center rounded-full px-2 py-1 transition-all duration-300 hover:text-white hover:bg-[#F90607]">
            <svg
              className="w-7 h-7"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5"
                  className="stroke-[#3E3E3E]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg> 
            {files.length === 0 ? "Adjuntar" : "Seleccionar más"}
          </button>
          </section>
          <button
            type="submit"
            className="w-max border border-[#F90607] rounded-full py-2 px-4 text-white bg-[#F90607] active:bg-opacity-80 active:border-transparent transition-all"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
