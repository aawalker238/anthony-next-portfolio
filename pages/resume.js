import { Component } from 'react';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';

class Resume extends Component {
  render() {
    return (
      <Layout {...this.props.auth}>
        <PageLayout>
          <h1>resume</h1>
        </PageLayout>
      </Layout>
    );
  }
}

export default Resume;
