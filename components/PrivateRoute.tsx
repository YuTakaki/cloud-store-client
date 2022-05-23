import Router, { useRouter } from 'next/router'
import React from 'react'
import { get } from '../utils/requests'

const PrivateRoute = (Component : any) => {

  const NewComponent = ({...props}) => {
    return (
      <Component {...props}/>
    )
  }

  NewComponent.getInitialProps = async(ctx : any)=> {
    type pagePropsType = {
      props : {
        auth : boolean
      }
    }
    const data : pagePropsType = {
      props : {
        auth : false
      },
    }
    try {
      const verifyToken = await get('/api/auth/verify', {
        header : {
          Cookie: ctx.req!.headers.cookie!
        }
      });
  
      console.log(verifyToken);
      
    } catch (error) {
      console.log(error, 'yutakaki');
      ctx.res.writeHead(307, { Location: '/login' })
      ctx.res.end()
    }
    return data;
  }

  return NewComponent;
}

export default PrivateRoute