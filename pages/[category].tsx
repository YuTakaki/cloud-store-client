import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import { useRouter } from 'next/router';
import BasicSort from '../components/dashboard/BasicSort';
import PrivateRoute from '../components/PrivateRoute';

const Category: NextPage = () => {

  const router = useRouter();

  const {category} = router.query

  // const pages = ['all', 'images', 'videos', 'music', 'documents']

  // console.log(category);

  // if (!pages.includes(category as string)) {
  //   router.push('/404');
  // }
  return (
    <Layout>
      <BasicSort />
      <GridFiles />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = PrivateRoute(async(ctx) => {
  return {props:{}}
})

export default Category;