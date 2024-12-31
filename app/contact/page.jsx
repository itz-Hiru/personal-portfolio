"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 72 550 8919",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hirumithakuladewanew@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "216/6, Welikatiya Road, Kelaniya",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [errorTimeout, setErrorTimeout] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      service: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      return "Please fill in all fields before submitting.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phone)) {
      return "Please enter a valid phone number.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setStatus("");
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
      const timeoutId = setTimeout(() => {
        setError("");
      }, 8000);
      setErrorTimeout(timeoutId);
      return;
    }

    setError("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        "z_jfjxJVTLVp6yXZZ"
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setStatus("Message sent successfully!");
          setError("");

          setTimeout(() => {
            setStatus("");
          }, 3000);

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send message", error);
          setStatus("Failed to send message. Please try again.");
          setError("");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 2,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#11111c] rounded-xl"
            >
              <h3 className="text-3xl text-white">Let's work together</h3>
              <p className="text-white/75">
                {error
                  ? error
                  : status
                  ? status
                  : "Send your email to work with me"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="android">Android Development</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[150px] w-full"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="max-w-40 bg-black text-white hover:bg-[#0099ff] hover:text-black transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#11111c] text-[#0099ff] rounded flex justify-center items-center">
                    <div className="text-[22px]">{item.icon}</div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-[16px]">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
