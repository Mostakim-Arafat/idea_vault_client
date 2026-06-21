'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const data1 = new FormData(e.currentTarget)
        const data2 = Object.fromEntries(data1.entries())
        console.log(data2)

        const { data, error } = await authClient.signUp.email({
            name: data2.fullName, // required
            email: data2.email, // required
            password: data2.password, // required
            image: data2.photoURL,

        });
        if(data){
            console.log(data)
            toast.success('Registered success')
        }
        else{
            toast.error(error.message)
        }
        
    }
    return (
        <div className="flex justify-center items-center my-3">
            <div>
                 <h1 className="text-2xl text-center font-serif ">Register</h1>
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired className="w-full max-w-64" name="fullName">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" />
                    <Description>This field is required</Description>
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField className="w-full max-w-64" name="photoURL" defaultValue='https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/11/1200/675/e5c757ab-trump.jpg?ve=1&tl=1'>
                    <Label>photo URL</Label>
                    <Input placeholder="https://...." type="url" />
                    <Description>This field is required</Description>
                </TextField>

                <TextField
                    isRequired
                    minLength={6}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[a-z]/.test(value)) {
                            return "Password must contain at least one Lowercase letter";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 Lowercase</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <ToastContainer/>
            </div>
            
        </div>
    );
};

export default Register;