import React from 'react';
import Page from 'components/page';
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';

const Contact: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Page {...props} display="flex" flexDirection={'column'} minH="100vh">
      Contact
      <Box w="full" p="10">
        <FormControl
          w="full"
          method="POST"
          display="flex"
          flexDirection={'column'}
          target="_blank"
          as="form"
          action="https://formsubmit.co/d92d4dbfc977668e8bf56d6b6cb37e10"
        >
          <Input
            name="email"
            type="email"
            variant={'flushed'}
            placeholder="Email"
            mx="auto"
            my="5"
            w="500px"
            maxLength={256}
            color={'whiteAlpha.900'}
            _placeholder={{ color: 'inherit' }}
            focusBorderColor={useColorModeValue('red.500', 'red.200')}
          />
          <Input
            name="name"
            mx="auto"
            variant={'flushed'}
            my="5"
            w="500px"
            placeholder="Name"
            color={'whiteAlpha.900'}
            _placeholder={{ color: 'inherit' }}
            focusBorderColor={useColorModeValue('red.500', 'red.200')}
            maxLength={124}
          />
          <Textarea
            name="message"
            variant={'flushed'}
            maxLength={1024}
            mx="auto"
            my="5"
            focusBorderColor={useColorModeValue('red.500', 'red.200')}
            color={'whiteAlpha.900'}
            _placeholder={{ color: 'inherit' }}
            w="500px"
            placeholder="Your message"
          />
          <Button
            type="submit"
            // variant={'outline'}
            mx="auto"
            my="5"
            w="500px"
            colorScheme={'red'}
          >
            {' '}
            Send{' '}
          </Button>
        </FormControl>
      </Box>
    </Page>
  );
};

export default Contact;
