import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./consts";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white border-y-8 border-sky-500 md:px-10">
      <div className="px-5 py-10 mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex flex-col w-full">
              <label>Your Name</label>
              <input
                {...register("firstName")}
                type="text"
                className="w-full border rounded-md p-2"
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col w-full">
              <label>Your Last Name</label>
              <input
                {...register("lastName")}
                type="text"
                className="w-full border rounded-md p-2"
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
          </div>

          <label>Your Email</label>
          <input {...register("email")} type="email" className="w-full border rounded-md p-2" />
          <p className="text-red-500">{errors.email?.message}</p>

          <label>Subject</label>
          <input {...register("subject")} type="text" className="w-full border rounded-md p-2" />
          <p className="text-red-500">{errors.subject?.message}</p>

          <label>Message</label>
          <textarea
            {...register("message")}
            type="text"
            className="w-full border rounded-md p-2 h-48 resize-none"
          />
          <p className="text-red-500">{errors.message?.message}</p>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-5 mx-auto rounded-full border border-transparent text-white bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 md:w-1/2"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
