"use client";
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfilePage = () => {

    const {
        register,
        handleSubmit,
        watch } = useForm();


    const updateProfileFunc = async (data) => {
        console.log(data, 'update profile data');
        const { name, photo } = data;

        const { data: res, error } = await authClient.updateUser({
            image: photo,
            name: name,
            callbackURL: '/profile',
        })
        console.log(res, error);

        if (error) {
            toast.danger(error.message);
            return;
        }

        if (res) {
            toast.success("Profile updated successfully!");
        }
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold mb-6">
                Update Profile
            </h1>
            <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={handleSubmit(updateProfileFunc)}>

                {/* name */}
                <TextField

                    type="text"
                    validate={(value) => {
                        // {
                        //     if (value.trim().length < 3)
                        //         return "Name must be at least 3 characters";
                        // }
                        // return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"
                        {...register("name")}
                    />
                    <FieldError />
                </TextField>

                {/* photo url */}
                <TextField

                    type="text"
                    validate={(value) => {
                        // {
                        //     try {
                        //         new URL(value);
                        // return null;
                        //     } catch {
                        //         return "Please enter a valid photo URL";
                        //     }
                        // }
                    }}
                >
                    <Label>Photo URL</Label>
                    <Input placeholder="Enter your photo url"
                        {...register("photo")}
                    />
                    <FieldError />
                </TextField>

                <Button type='submit' className='w-full'>Update information</Button>
            </Form>

        </div>
    );
};

export default UpdateProfilePage;