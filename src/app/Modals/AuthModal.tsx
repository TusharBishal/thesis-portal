import Link from 'next/link';
import React from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import {GiBookmarklet} from 'react-icons/gi';
import { useRecoilValue } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';

type AuthModalProps = {
    
};

const AuthModal:React.FC<AuthModalProps> = () => {
    const authModal = useRecoilValue(AuthModalState);
    return (
        <>
        {/* <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-10'></div> */}
        <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
            <div className='relative w-fll h-full mx-auto flexitems-center justify-center'>
                <div className='bg-white rounded-lg shadow relative w-full bg-white mx-6'>
                    <div className='flex flex-col items-center justify-center p-6 border-b-2 border-gray-300'>
                        
                            <GiBookmarklet size={60}/>
                            <h3 className='text-xs font-medium font-bold pt-2'>MQ Thesis</h3>
                       
                    </div>
                    {authModal.type === 'login' ? <Login/> : <ResetPassword/>}
                    {/* <Login/> */}
                    {/* <ResetPassword/> */}
                </div>
            </div>
        </div>
        </>
    )
}
export default AuthModal;