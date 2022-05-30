import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { get } from '../utils/requests'

const PrivateRoute = (gssp : GetServerSideProps) => {
  return async(ctx : GetServerSidePropsContext) => {
    const {req} = ctx;
    try {
      await get('/api/auth/verify', {
        header : {
          Cookie: req.headers.cookie
        }
      });
      
    } catch (error) {
      return {
        props:{},
        redirect: {
          destination: '/login',
        }
      }
    }
    return gssp(ctx)
  }
}


export default PrivateRoute