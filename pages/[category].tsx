import type { NextPage } from 'next';
import Layout from '../layout/layout';
import BasicFilter from '../components/dashboard/BasicFilter';
import GridFiles from '../components/dashboard/GridFiles';
import { useRouter } from 'next/router';

const Category: NextPage = () => {

  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  return (
    <Layout>
      <BasicFilter />
      <GridFiles />
    </Layout>
  )
}

export default Category;