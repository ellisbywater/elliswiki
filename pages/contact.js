import React, { useState } from "react";
import Link from "next/link";
import { imageUrl, sanityClient } from "@/lib/sanity";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import * as yup from "yup";

const fetcher = (...args) => fetch(...args).then((r) => r.json());
const contactQuery = `*[_type == "contactPage"][0]`;

export default function Contact({ contactData }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [successName, setName] = useState("");
  const validationSchema = yup.object().shape({
    name: yup.string().required("Your full name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Your email address is required"),
    phone: yup
      .string()
      .required("Your phone number is required")
      .min(10, "Please enter your 10 digit phone number.")
      .max(10, "Please enter your 10 digit phone number.")
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Please enter a valid phone number."
      ),
    message: yup.string().required("Please enter a message"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    let config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response);
      setShowError(false);
      setName(data.name);
      setShowSuccess(true);
    } catch (error) {
      console.log(error);
      setShowSuccess(false);
      setShowError(true);
    }
  };
  return (
    <>
      <div className="py-4 lg:py-8  relative">
        <img
          src={imageUrl(contactData.mainImage).url()}
          className=" lg:h-full w-full lg:w-1/2 absolute  inset-0 object-cover object-center xl:block hidden"
          alt="map"
        />
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              <img
                src={imageUrl(contactData.mainImage).url()}
                className="h-full w-full xl:w-1/2 absolute inset-0  bg-cover bg-center xl:hidden"
                alt="map"
              />
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4 backdrop-opacity-10">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white">
                    {contactData.heading}
                  </h1>
                  <div className="w-full md:w-10/12 mt-3 ">
                    <h2 className="text-white text-base md:text-lg leading-8 tracking-wider">
                      {contactData.subHeading}
                    </h2>
                    <div className="my-4 bg-black">
                      <p className="text-white text-base md:text-lg leading-8 tracking-wider">
                        {contactData.summary}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      {contactData.linkedIn && (
                        <div className="text-2xl text-white m-2">
                          <Link href={contactData.linkedIn}>
                            <FiLinkedin />
                          </Link>
                        </div>
                      )}
                      {contactData.github && (
                        <div className="text-2xl text-white m-2">
                          <Link href={contactData.github}>
                            <FiGithub />
                          </Link>
                        </div>
                      )}
                    </div>

                    {contactData.phone && (
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-green-700 font-semibold">
                          Contact
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                          {contactData.phone}
                        </h2>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                {showSuccess && (
                  <div className="w-full md:w-10/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                      Thank you {successName} for reaching out. I will get back
                      to you as soon as possible.
                    </h2>
                  </div>
                )}
                {showError && (
                  <div className="w-full md:w-10/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                      Something went wrong. Please try again.
                    </h2>
                  </div>
                )}

                <form
                  className="w-full 2xl:w-8/12 mt-3"
                  onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Name</p>
                    <input
                      {...register("name")}
                      className="mt-3 shadow-lg text-base rounded border-2 w-full lg:w-full xl:w-10/12 hover:border-gray-800 focus:border-gray-800 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="John Bonham"
                    />
                    <div className="text-red-600 text-base italic">
                      {errors.name?.message}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Email Address
                    </p>
                    <input
                      {...register("email")}
                      className="mt-3 shadow-lg text-base rounded border-2 w-full lg:w-full xl:w-10/12 hover:border-gray-800 focus:border-gray-800 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="email"
                      placeholder="email@example.com"
                    />
                    <div className="text-red-600 text-base italic">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Phone Number
                    </p>
                    <input
                      {...register("phone")}
                      className="mt-3 shadow-lg text-base rounded border-2 w-full lg:w-full xl:w-10/12 hover:border-gray-800 focus:border-gray-800 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      placeholder="(123) 456-7890"
                    />
                    <div className="text-red-600 text-base italic">
                      {errors.phone?.message}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Message
                    </p>
                    <textarea
                      {...register("message")}
                      className="mt-3 shadow-lg rounded text-base border-2 w-full lg:w-full xl:w-10/12 resize-none hover:border-gray-800 focus:border-gray-800 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Write me something..."
                      defaultValue={""}
                    />

                    <div className="text-red-600 text-base italic">
                      {errors.message?.message}
                    </div>
                  </div>
                  <div className="py-5">
                    <button
                      type="submit"
                      className="py-8 md:py-5 lg:py-3 shadow-2xl rounded md:py-5 px-20 md:px-10 bg-black hover:bg-gray-900  text-white hover:bg-black hover:shadow ease-in duration-150 text-lg md:text-lg w-full sm:w-1/3 tracking-wider font-semibold">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const result = await sanityClient.fetch(contactQuery);
  return {
    props: {
      contactData: result,
    },
  };
}
