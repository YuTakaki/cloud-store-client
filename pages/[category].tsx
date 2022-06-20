import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import BasicSort from '../components/dashboard/BasicSort';
import PrivateRoute from '../components/PrivateRoute';
import { get } from '../utils/requests';

interface CategoryProps {
  files : []
}
const Category: NextPage<CategoryProps> = ({ files } : CategoryProps) => {

  return (
    <Layout>
      <BasicSort />
      <GridFiles files={files}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = PrivateRoute(async(ctx) => {
  const {
    query,
    req
  } = ctx;
  const {category} = query;
  const pages = {
    '' : 'all',
    images : 'image',
    video : 'video',
    music : 'audio',
    document : 'text'
  }
  if (!((category as string) in pages )) {
    return {
      redirect: {
        destination: '/404',
      },
      props:{},
    }
  }
  const props = {
    files : []
  }
  try {
    const type = pages[category as '' | 'images' | 'videos' | 'music' | 'document']
    const getFiles = await get(`/api/upload/type/${type}`, {
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

export default Category;