import React from 'react';

import Page from '../../components/Page';

import theme from '../../components/Main/theme.css';

const ContactPage = () => (
  <Page>
    <h1>Contact Us</h1>
    <div className={theme.layout}>
      <div>
        <h2>Head Office</h2>
        <address>
          3160 Derry Rd. E<br />
          Mississauga, ON L4T 1A9<br />
          Canada
        </address>
        <p>Phone: <a href="tel:+18004932041">1 800.493.2041</a></p>
      </div>
      <div>
        <p>If you have any questions about the Urbania brand, send an email to <a href="mailto:emile@urbaniacanada.com">emile@urbaniacanada.com</a> and a representative will get back to you shortly.</p>
      </div>
    </div>
  </Page>
);

export default ContactPage;
