"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import validator from "validator";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "./ui/textarea";
import { FaPaperPlane } from "react-icons/fa";
import { Checkbox } from "./ui/checkbox";

const phoneRegex = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
);

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, {
      message: "phone number must be a valid phone number.",
    })
    .refine(validator.isMobilePhone, {
      message: "phone number must be a valid phone number.",
    }),
  companyName: z.string().optional(),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

function InputForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      companyName: "",
      message: "",
    },
  });

  function onSubmit() {
    console.log("Form submitted");
    form.reset();
  }

  return (
    <div className="flex flex-col items-center justify-center pt-40">
      <div className="pb-8 text-center">
        <h1 className="text-4xl font-bold text-center">
          I&apos;d love to hear from you
        </h1>
        <p className="py-2 text-neutral-700">
          Feel free to reach out - I am here to help!🚀
        </p>
      </div>
      <div className="max-w-3xl w-full ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g.john" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g.doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g xyz limited (if any)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.+447584766156" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <p>Choose a service that best fits your need.</p>
              <div className="flex justify-start gap-8 py-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="web design" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-neutral-700 peer-disabled:opacity-70"
                  >
                    Web Design
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="web design" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-neutral-700 peer-disabled:opacity-70"
                  >
                    UX/UI Design
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="web design" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-neutral-700 peer-disabled:opacity-70"
                  >
                    Mobile App Development
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="web design" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-neutral-700 peer-disabled:opacity-70"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" variant="primary">
              <span>Send Message</span>
              <span className="px-2">
                <FaPaperPlane />
              </span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default InputForm;
