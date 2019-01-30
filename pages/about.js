import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';

export default ({ auth }) => (
  <Layout {...auth}>
    <PageLayout>
      <h1>This is the about page</h1>
    </PageLayout>
  </Layout>
);
