import { Component } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';

class PortfolioDetail extends Component {
  static async getInitialProps({ query }) {
    const postId = query.id;
    const { data: postDetails } = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .catch(err => {
        console.warn(err);
        return {};
      });
    return { postDetails };
  }

  render() {
    const { postDetails, auth } = this.props;
    return (
      <Layout {...auth}>
        <PageLayout>
          <h1>PortfolioDetail Page</h1>
          {postDetails ? (
            <>
              <h2>{postDetails.id}</h2>
              <h2>{postDetails.title}</h2>
              <p>{postDetails.body}</p>
            </>
          ) : (
            <h2>Post not found</h2>
          )}
        </PageLayout>
      </Layout>
    );
  }
}

export default withRouter(PortfolioDetail);
