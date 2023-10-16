import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    
    if (!authUser) {
      router.push('/login'); 
      return null;
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;
