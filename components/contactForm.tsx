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
import { SetStateAction, useState, forwardRef } from "react";
import { useForm } from "react-hook-form";

interface ContactProps {
  children: React.ReactNode;
}

const ContactForm = forwardRef((props: ContactProps, ref: any) => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e: {
//     target: { value: SetStateAction<string> };
//   }) => setEmail(e.target.value);
//   const handleNameChange = (e: { target: { value: SetStateAction<string> } }) =>
//     setName(e.target.value);
//   const handleMessageChange = (e: {
//     target: { value: SetStateAction<string> };
//   }) => setMessage(e.target.value);

//   const isError = message === "";
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(data: any) {
    return new Promise<void>((resolve) => {
    //   setTimeout(() => {

        alert(JSON.stringify(data, null, 2));
        resolve();
    //   }, 1000);
    });
  }
  return (
    <Container ref={ref}>
      <Heading p={2}>{props.children}</Heading>

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
        <FormControl isRequired>
          <FormLabel id="message">Message</FormLabel>
          <Textarea
            // isInvalid={isError}
            {...register("messag", {
              required: "This is required",
            })}
            // value={message}
            // onChange={handleMessageChange}
            resize="vertical"
          />
          {!(errors.messag) ? (
            <FormHelperText>
              Enter the message you would like to send me.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Message is required</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
        //   colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;