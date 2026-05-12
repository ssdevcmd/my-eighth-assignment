"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from "@gravity-ui/icons";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch } = useForm();


  const handleLoginFunc = async (data) => {
    // e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log('user email & password:',email, password, );
    console.log('user data:', data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };
  // console.log(watch('email'));
  // console.log(watch('password'));

  return (
    <div>

      <h2 className='text-3xl font-bold text-center py-10 mx-auto'>Login your account</h2>
      <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={handleSubmit(handleLoginFunc)}>

        {/* email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email"
            {...register("email")} />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField className="w-full max-w-[280px]" name="password"
          isRequired
          minLength={8}
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}>


          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
              {...register("password")}
              
              placeholder='Enter your password'
            />
            
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            <Checkbox />
            Login
          </Button>
        </div>
      </Form>
      <p className='mt-4 text-center font-semibold'>Don't have an account? <Link href="/register" className='text-red-500'>Register</Link></p>
    </div>
  );
};

export default LoginPage;