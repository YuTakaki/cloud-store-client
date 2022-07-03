import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../layout/layout';
import GridFiles from '../components/dashboard/GridFiles';
import BasicSort from '../components/dashboard/BasicSort';
import PrivateRoute from '../components/PrivateRoute';
import { get } from '../utils/requests';
import { useDispatch } from 'react-redux';
import { setFiles } from '../store/slicers/filesSlicer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

interface CategoryProps {
  files : []
}
const Category: NextPage<CategoryProps> = ({ files } : CategoryProps) => {

  const dispatch = useDispatch()
  const allFiles = useSelector((state : any) => state.fileReducer.files)

  useEffect(() => {
    dispatch(setFiles(files))
  }, [dispatch, files])

  return (
    <Layout>
      <BasicSort />
      <GridFiles files={allFiles}/>
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
    const type = pages[category as '' | 'images' | 'video']
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