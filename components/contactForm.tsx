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
  VStack,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { rClickables } from "../animations/clickables";


interface ContactProps {
  children: React.ReactNode;
}

const ContactForm = forwardRef((props: ContactProps, ref: any) => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({ defaultValues: { message: "", name: "", email: "" } });
 async function onSubmit(data: any) {
    const name = data.name === "" ? "Anonymous" : data.name;
    const email = data.email === "" ? "an@on" : data.email;
    const message = data.message;
    // return new Promise<void>( (resolve) => {
        // setTimeout(() => {
        const res = (await fetch(
          "https://rami-maalouf.vercel.app/api/notionAPI",
          {
            method: "POST",
            body: JSON.stringify({ name, email, message }),
          }
        )) as Response;
    if (res.status === 201) {
      toast({
        title: "Success!",
        description: "Thank you for contacting us!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error!",
        description: "Something went wrong, please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    //   alert(JSON.stringify({ name, email, message }));
    //   resolve();
      //   }, 1000);
    // });
  }
  return (
    <VStack ref={ref} p={4}>
      <Heading p={2}>{props.children}</Heading>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            focusBorderColor="yellow.200"
            {...register("name")}
            id="name"
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel id="email">Email</FormLabel>
          <Input
            focusBorderColor="yellow.200"
            {...register("email")}
            type="email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel id="message">Message</FormLabel>
          <Textarea
            focusBorderColor="yellow.200"
            {...register("message", {
              required: "This is required",
            })}
            resize="vertical"
          />
          {!isDirty && (
            <FormHelperText>
              Enter the message you would like to send me.
            </FormHelperText>
          )}
          {errors.message && (
            <FormErrorMessage>{errors.message.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          as={motion.div}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={rClickables}
          mt={4}
          isLoading={isSubmitting}
          type="submit"
          className="cursor-pointer"
        >
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={rClickables}
          >
            Submit
          </motion.p>
        </Button>
      </form>
    </VStack>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
