import { Component } from 'react';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
      <Layout>
        <PageLayout>
          <h1>Verifying login info...</h1>
        </PageLayout>
      </Layout>
    );
  }
}

export default withRouter(Callback);
