"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField, Toast, toast } from '@heroui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from "@gravity-ui/icons";



const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        watch } = useForm();


    const handleRegisterFunc = async (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log('user email & password:',email, password, );
        console.log('user data:', data);
        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/login",
        });
        console.log(res, error);

        if (error) {
            toast.danger(error.message);
            return;
        }

        if (res) {
            toast.success("Registration successful!");
        }
    };
    // console.log(watch('email'));
    // console.log(watch('password'));
    return (
        <div>
            <h2 className='text-3xl font-bold text-center py-10 mx-auto'>Register your account</h2>
            <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={handleSubmit(handleRegisterFunc)}>

                {/* name */}
                <TextField
                    isRequired
                    type="text"
                    validate={(value) => {
                        {
                        if (value.trim().length < 3)
                         return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"
                        {...register("name")} />
                    <FieldError />
                </TextField>

                {/* photo url */}
                <TextField
                    isRequired
                    type="text"
                    validate={(value) => {
                        {
                           try {
                           new URL(value);
                           return null;
                            } catch {
                            return "Please enter a valid photo URL";
                            }
                        }
                    }}
                >
                    <Label>Photo URL</Label>
                    <Input placeholder="Enter your photo url"
                        {...register("photo")} />
                    <FieldError />
                </TextField>

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
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                </TextField>
                <div className="flex gap-2">

                    <Button type="submit" className="w-full">
                        <Checkbox />
                        Register
                    </Button>

                </div>
            </Form>

        </div>
    );
};

export default RegisterPage;