import type { NextPage } from 'next';
import Layout from '../layout/layout';
import BasicFilter from '../components/dashboard/BasicFilter';
import GridFiles from '../components/dashboard/GridFiles';

const Home: NextPage = () => {

  return (
    <Layout>
      <BasicFilter />
      <GridFiles />
    </Layout>
  )
}

export default Home
