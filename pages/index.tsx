import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../layout/layout';
import BasicSort from '../components/dashboard/BasicSort';
import GridFiles from '../components/dashboard/GridFiles';
import PrivateRoute from '../components/PrivateRoute';
import { get } from '../utils/requests';

interface HomeProps {
  files : []
}
const Home: NextPage<HomeProps> = ({ files } : HomeProps ) => {


  return (
    <Layout>
      <BasicSort />
      <GridFiles files={files} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = PrivateRoute(async(ctx) => {
  const {
    req
  } = ctx;
  
  const props = {
    files : []
  }
  try {
    const getFiles = await get(`/api/upload/type/all`, {
      headers : {
        Cookie: req.headers.cookie
      }
    })
    props.files = getFiles.data
  } catch (error) {
    console.log(error);
  }
  return {
    props : {
      ...props
    }
  }
})

export default Home
