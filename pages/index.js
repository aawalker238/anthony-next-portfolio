import { Component } from 'react';
import axios from 'axios';
import Layout from '../components/shared/Layout';

class Index extends Component {
  static async getInitialProps() {
    const { data: users } = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .catch(err => {
        console.warn(err);
        return {};
      });

    return { users };
  }

  render() {
    const { users } = this.props;
    return (
      <Layout>
        <p>Hello Next.js</p>
        <ul>
          {users && users.map((user, idx) => <li key={idx}>{user.name}</li>)}
        </ul>
      </Layout>
    );
  }
}

export default Index;
