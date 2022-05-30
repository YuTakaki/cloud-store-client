import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { get } from '../utils/requests'
import cookie from 'cookie'

const PrivateRoute = (gssp : GetServerSideProps) => {
  const returnError = {
    props:{},
    redirect: {
      destination: '/login',
    }
  }
  return async(ctx : GetServerSidePropsContext) => {
    const {req} = ctx;
    try {
      // if (!req.headers.cookie) return returnError
      await get('/api/auth/verify', {
        headers : {
          Cookie: req.headers.cookie
        }
      });
      console.log('asas')
      
    } catch (error:any) {
      console.log(error.response)
      return returnError
    }
    return gssp(ctx)
  }
}


export default PrivateRoute