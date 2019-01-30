import { Component } from 'react';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';

class Contact extends Component {
  render() {
    return (
      <Layout {...this.props.auth}>
        <PageLayout>
          <h1>Contact</h1>
        </PageLayout>
      </Layout>
    );
  }
}

export default Contact;
