import React from 'react';
/** @jsx jsx */
import { jsx, Label, Input, Button, Flex, Box, Text, Spinner } from 'theme-ui';
import Subscribe from './mailchimp';


const ComplexForm = ({ status, message, onValidated, group }) => {
  let email;
  let fname;
  let lname;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      group
    });

  return (
    <>
      <Flex mb='2'>
        <Box mr="3" sx={{ flexGrow: 1 }}>
          <Label for="fname">First Name</Label>
          <Input id="fname" type="text" ref={node => (fname = node)} name="FNAME" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Label for="lname">Last Name</Label>
          <Input id="lname" type="text" ref={node => (lname = node)} name="LNAME" />
        </Box>
      </Flex>
      <Flex sx={{ alignItems: 'end', flexWrap: 'wrap' }}>
        <Box sx={{ width: '100%' }}>
          <Label for="email">Your email</Label>
          <Input id="email" ref={node => (email = node)} type="email" />
        </Box>
        <Button onClick={submit} sx={{ mt: 3, width: '100%' }}>
          Start the free course!
        </Button>
      </Flex>
      <Box mt="2" sx={{ fontSize: 1 }}>
        {status === 'sending' && <Spinner />}
        {status === 'success' && (
          <Text sx={{ color: 'secondary', fontWeight: 'bold' }}>{message}</Text>
        )}
        {status === 'error' && (
          <div
            sx={{ fontWeight: 'bold', color: 'headings' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </Box>
    </>
  );
};
export const ComplexSubscribe = ({ listId, group = 4 }) => (
  <Subscribe CustomForm={ComplexForm} group={group} listId={listId} />
);

export default ComplexSubscribe;
