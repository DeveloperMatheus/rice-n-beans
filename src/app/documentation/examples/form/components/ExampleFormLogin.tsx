"use client";

import * as z from "zod";

import { ErrorMessage, Input, Label } from "~/components/Form";
import { Button } from "~/components/Layout";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";

const CODE_LOGIN_SETUP = `"use client";

import * as z from "zod";

import { ErrorMessage, Input, Label } from "~/components/Form";
import { Button } from "~/components/Layout";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Tab, TabList, TabPanel, Tabs } from "~/components/Tabs";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "This field must be a valid email",
  }),
  password: z.string().min(8, {
    message: "This field must have at least 8 characters",
  }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

const loginFormSchema = z.object({
  email: z.string().email({
    message: "This field must be a valid email",
  }),
  password: z.string().min(8, {
    message: "This field must have at least 8 characters",
  }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export const ExampleFormLogin = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleLoginSubmit(evt: LoginForm) {
    console.log("🚀 ~ handleTestSubmit ~ evt:", evt);
  }

  function renderErrorMessage(error?: string): React.ReactNode {
    if (!error) return;

    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Tabs defaultValue="view">
      <TabList>
        <Tab id="view">View</Tab>
        <Tab id="code">Code</Tab>
      </TabList>
      <TabPanel id="view" className="w-fit">
        <form className="space-y-3" onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="space-y-1">
            <Label>Login</Label>
            <Input {...register("email")} type="text" />
            {renderErrorMessage(errors.email?.message)}
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            {/* This is not necessary, since i created uncontrolled components,
            but you can use the Controller HOC from RHF if you want */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  onChange={(evt) => field.onChange(evt.target.value)}
                  type="password"
                />
              )}
            />
            {renderErrorMessage(errors.password?.message)}
          </div>
          <div className="text-center">
            <Button className="w-32">Submit</Button>
          </div>
        </form>
      </TabPanel>
    </Tabs>
  );
};
`;

const loginFormSchema = z.object({
  email: z.string().email({
    message: "This field must be a valid email",
  }),
  password: z.string().min(8, {
    message: "This field must have at least 8 characters",
  }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export const ExampleFormLogin = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleLoginSubmit(evt: LoginForm) {
    console.log("🚀 ~ handleTestSubmit ~ evt:", evt);
  }

  function renderErrorMessage(error?: string): React.ReactNode {
    if (!error) return;

    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Tabs defaultValue="view">
      <TabList>
        <Tab id="view">View</Tab>
        <Tab id="code">Code</Tab>
      </TabList>
      <TabPanel id="view" className="w-full xl:w-fit">
        <form className="space-y-3" onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="space-y-1">
            <Label>Login</Label>
            <Input {...register("email")} type="text" />
            {renderErrorMessage(errors.email?.message)}
          </div>
          <div className="space-y-1">
            <Label>Password</Label>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  onChange={(evt) => field.onChange(evt.target.value)}
                  type="password"
                />
              )}
            />
            {renderErrorMessage(errors.password?.message)}
          </div>
          <div className="text-center">
            <Button className="w-32">Submit</Button>
          </div>
        </form>
      </TabPanel>
      <TabPanel id="code" className="overflow-x-auto">
        <code className="whitespace-pre">{CODE_LOGIN_SETUP}</code>
      </TabPanel>
    </Tabs>
  );
};
