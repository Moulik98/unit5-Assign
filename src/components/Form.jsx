import { VStack, Input, Heading, Button, useToast, Image, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


export const Form = () => {

    const { toggleAuth, isLogin, setIsLogin } = useContext(AuthContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const [token, setToken] = useState("");
    const toast = useToast();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    setIsLogin(true);
                    setToken(res.token);
                    toggleAuth();
                    toast({
                        title: 'Account Login Successful',
                        description: `Token number: ${res.token}`,
                        status: 'success',
                        duration: 12000,
                        isClosable: true,
                    });

                } else if (res.error) {
                    toast({
                        title: 'User Details Not found',
                        description: 'Please try again with correct details',
                        status: 'error',
                        duration: 10000,
                        isClosable: true,
                    });
                }
            })
    };

    return isLogin ? (
        <Flex mt={100} justify='center'>
            <Image w={400} src="https://assets.materialup.com/uploads/cdfce6f5-af30-405d-9740-71c3aefb6a3b/preview.gif" />
        </Flex>
    ) : (
        <form onSubmit={handleSubmit}>
            <VStack
                gap={3}
                maxW={400}
                p='40px 20px'
                m='100px auto'
                rounded={10}
                border={'1px solid #CDDEFF'}
            >
                <Heading>Login</Heading>
                <Input onChange={handleChange} name="email" type='text' placeholder="Email" />
                <Input onChange={handleChange} name="password" type='password' placeholder="Password" />
                <Button type='submit' colorScheme='teal' w='100%'>
                    Login
                </Button>
            </VStack>
        </form>
    );
};