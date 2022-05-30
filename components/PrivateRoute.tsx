import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { get } from '../utils/requests'

const PrivateRoute = (gssp : GetServerSideProps) => {
  return async(ctx : GetServerSidePropsContext) => {
    const {req} = ctx;
    try {
      const verifyToken = await get('/api/auth/verify', {
        header : {
          Cookie: req.headers.cookie
        }
      });
  
      console.log(verifyToken);
      
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
        }
      }
    }
    return gssp(ctx)
  }
}


export default PrivateRoute