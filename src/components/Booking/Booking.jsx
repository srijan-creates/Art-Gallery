import { FiUpload } from "react-icons/fi";
import {
  formFields,
  textAreaField,
  fileField,
} from "../../constants/FormField";
import { useScrollAnimation } from "../../Hook/AnimationHook";

const Booking = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8  font-display overflow-x-hidden">
      <div className="mb-16">
        <h2 className="text-center md:mx-auto">Book a Show</h2>
        <p className="text-sm md:text-base leading-relaxed mt-6 text-center max-w-3xl mx-auto">
          Art Gallery operates under two models—Rental and Partnership. For
          inquiries, contact{" "}
          <a
            href="mailto:maisthapa@mos.com.np"
            className="underline text-textcolor/60 hover:text-textcolor"
          >
            sthapa@mos.com.np
          </a>{" "}
          or{" "}
          <a
            href="mailto:acharyaurza22@gmail.com"
            className="underline text-textcolor/60 hover:text-textcolor"
          >
            acharyaurza22@gmail.com
          </a>
          .
        </p>
      </div>

      <div
        className={`max-w-4xl bg-white px-4 sm:px-8 py-8 rounded-2xl shadow-xl space-y-8 mx-auto ${animate ? "animate-ease-in-left duration-300" : ""}`}
        ref={ref}
      >
        <h2 className=" text-gray-800 text-center md:mx-auto">
          Booking Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.id} className={`col-span-1`}>
              <label htmlFor={field.id} className="block mb-2 font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                required={field.required}
                pattern={field.pattern || undefined}
                inputMode={field.inputMode || undefined}
                onKeyDown={
                  field.id === "phone"
                    ? (e) => {
                        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
                        const isNumber = /^[0-9]$/.test(e.key);
                        const isPlus = e.key === "+" && e.target.selectionStart === 0;

                        if (!isNumber && !isPlus && !allowedKeys.includes(e.key)) {
                          e.preventDefault();
                        }
                      }
                    : undefined
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor={textAreaField.id} className="block mb-2 font-medium text-gray-700">
            {textAreaField.label}
          </label>
          <textarea
            id={textAreaField.id}
            required={textAreaField.required}
            rows={textAreaField.rows}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
          ></textarea>
        </div>

        <div>
          <label htmlFor={fileField.id} className="block mb-2 font-medium text-gray-700">
            {fileField.label}
          </label>
          <label
            htmlFor={fileField.id}
            className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
          >
            <FiUpload className="text-xl text-black" />
            <span className="text-gray-700">Choose File</span>
          </label>
          <input type="file" id={fileField.id} required className="hidden" />
        </div>

        <div className="flex justify-center mt-6">
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
