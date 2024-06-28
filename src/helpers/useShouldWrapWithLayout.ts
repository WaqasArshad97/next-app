import { useRouter } from 'next/router';

const useShouldWrapWithLayout = () => {
  const router = useRouter();
  const shouldWrapWithLayout = !router.pathname.includes('/auth');
  return shouldWrapWithLayout;
};

export default useShouldWrapWithLayout;