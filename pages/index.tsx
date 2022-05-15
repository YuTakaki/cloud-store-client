import type { NextPage } from 'next';
import Layout from '../layout/layout';
import BasicSort from '../components/dashboard/BasicSort';
import GridFiles from '../components/dashboard/GridFiles';

const Home: NextPage = () => {

  return (
    <Layout>
      <BasicSort />
      <GridFiles />
    </Layout>
  )
}

export default Home
