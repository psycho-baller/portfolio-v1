import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Textarea,
  Heading,
  Button,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";


const ContactForm = () => {
//   const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [message, setMessage] = useState("");

//   const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value);
//     const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value);
//     const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => setMessage(e.target.value);

//   const isError = message === "";
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm();
function onSubmit(values: any) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 3000);
  });
}
  return (
    <Container>
      <Heading p={2}>Contact Me</Heading>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            {...register("name")}
            id="name"
            type="text"
            // value={name}
            // onChange={handleNameChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel id="email">Email</FormLabel>
          <Input
            {...register("email")}
            type="email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl >
          <FormLabel id="message">Message</FormLabel>
          <Textarea
            {...register("message", {
              required: "This is required",
            })}
            // value={message}
            // onChange={handleMessageChange}
            resize="vertical"
          />
          {/* {!isError ? (
            <FormHelperText>
              Enter the message you would like to send me.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Message is required</FormErrorMessage>
          )} */}
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;