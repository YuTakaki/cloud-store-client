import type { NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import { useRouter } from 'next/router';
import BasicSort from '../components/dashboard/BasicSort';

const Category: NextPage = () => {

  const router = useRouter();
  return (
    <Layout>
      <BasicSort />
      <GridFiles />
    </Layout>
  )
}

export default Category;