import { Component } from 'react';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';

class Blog extends Component {
  render() {
    return (
      <Layout {...this.props.auth}>
        <PageLayout>
          <h1>blog</h1>
        </PageLayout>
      </Layout>
    );
  }
}

export default Blog;
