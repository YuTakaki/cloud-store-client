import type { NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import { useRouter } from 'next/router';
import BasicSort from '../components/dashboard/BasicSort';
import PrivateRoute from '../components/PrivateRoute';

const Category: NextPage = () => {

  const router = useRouter();
  return (
    <Layout>
      <BasicSort />
      <GridFiles />
    </Layout>
  )
}

export default PrivateRoute(Category);