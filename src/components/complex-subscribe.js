import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
/** @jsx jsx */
import { jsx, Label, Input, Button, Flex, Box, Text, Spinner } from 'theme-ui';

const url = '//benjamingrobertson.us15.list-manage.com/subscribe/post?u=aafc0f8e65dbc564446043b15&id=';

const CustomForm = ({ status, message, onValidated, group }) => {
  let email;
  let fname;
  let lname;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    });

  return (
    <>
      <Flex mb='2'>
        <Box mr="3" sx={{ flexGrow: 1 }}>
          <Label>First Name</Label>
          <Input type="text" ref={node => (fname = node)} name="FNAME" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Label>Last Name</Label>
          <Input type="text" ref={node => (lname = node)} name="LNAME" />
        </Box>
      </Flex>
      <Flex sx={{ alignItems: 'end', flexWrap: 'wrap' }}>
        <Box sx={{ width: '100%' }}>
          <Label>Your email</Label>
          <Input ref={node => (email = node)} type="email" />
          {group &&
            <input hidden type="checkbox" checked name={group} value="1" />}
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
// use the render prop and your custom form
const ComplexSubscribe = ({ listId }) => (
  <MailchimpSubscribe
    url={`${url}${listId ? listId : '6e6d0bd232'}`}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
)
  ;

export default ComplexSubscribe;
