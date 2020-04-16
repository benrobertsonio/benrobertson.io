import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// eslint-disable-next-line max-len
const url = '//benjamingrobertson.us15.list-manage.com/subscribe/post?u=aafc0f8e65dbc564446043b15&id=';


const Subscribe = ({ listId, group = 4, CustomForm }) => (
  <MailchimpSubscribe
    url={`${url}${listId ? listId : '6e6d0bd232'}`}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        group={group}
        onValidated={formData => subscribe(formData)}
      />
    )}
  />
);

Subscribe.propTypes = {
  listId: PropTypes.string,
  group: PropTypes.number,
  CustomForm: PropTypes.node
};

export default Subscribe;
