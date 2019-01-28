import { Component } from 'react';
// import Link from 'next/link';
import axios from 'axios';
import Layout from '../components/shared/Layout';
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
    const { posts } = this.props;
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Portfolio;
