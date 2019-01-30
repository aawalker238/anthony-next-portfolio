import { Component } from 'react';
import axios from 'axios';
import Layout from '../components/shared/Layout';
import PageLayout from '../components/shared/PageLayout';
import { Link } from '../routes';

class Portfolio extends Component {
  static async getInitialProps() {
    const { data: posts } = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .catch(err => {
        console.warn(err);
        return {};
      });

    return { posts };
  }
  render() {
    const { posts, auth } = this.props;
    return (
      <Layout {...auth}>
        <PageLayout>
          <h1>portfolio</h1>
          <ul>
            {posts &&
              posts.slice(0, 10).map((post, idx) => {
                return (
                  <li key={idx}>
                    <Link route={`/portfolio-detail/${post.id}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </PageLayout>
      </Layout>
    );
  }
}

export default Portfolio;
