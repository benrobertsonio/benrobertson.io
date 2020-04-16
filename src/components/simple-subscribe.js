import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
/** @jsx jsx */
import { jsx, Label, Input, Button, Flex, Box, Text, Spinner } from 'theme-ui';

const url = '//benjamingrobertson.us15.list-manage.com/subscribe/post?u=aafc0f8e65dbc564446043b15&id=';

const CustomForm = ({ status, message, onValidated, group }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <Flex sx={{ alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <Box mr="3">
          <Label>Your email</Label>
          <Input ref={node => (email = node)} type="email" />
          {group &&
            <input hidden type="checkbox" checked name={group} value="1" />}
        </Box>
        <Button onClick={submit}>
          Send me the emails!
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
const SimpleSubscribe = ({ listId }) => (
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

export default SimpleSubscribe;
