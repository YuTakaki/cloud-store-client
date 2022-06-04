import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import { useRouter } from 'next/router';
import BasicSort from '../components/dashboard/BasicSort';
import PrivateRoute from '../components/PrivateRoute';
import { useEffect } from 'react';

const Category: NextPage = () => {

  const router = useRouter();
  return (
    <Layout>
      <BasicSort />
      <GridFiles />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = PrivateRoute(async(ctx) => {
  const {
    query
  } = ctx;
  const {category} = query;
  console.log(query);
  const pages = ['', 'images', 'videos', 'music', 'documents']
  if (!pages.includes(category as string)) {
    return {
      redirect: {
        destination: '/404',
      },
      props:{},
    }
  }
  return {props:{}}
})

export default Category;