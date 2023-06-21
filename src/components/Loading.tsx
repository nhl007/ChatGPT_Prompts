import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className='fixed top-0 w-[100vw] h-[100vh] flex flex-col flex-center'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
      <h1 className=' text-[32px]'>Loading...</h1>
    </div>
  );
};

export default LoadingSpinner;
