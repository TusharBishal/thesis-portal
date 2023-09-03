'Use Client'

import Link from 'next/link';
import React from 'react';
import ResetPassword from './ResetPassword';
import { useSetRecoilState } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const handleClick = (type: 'login' | 'forgotPassword') => {
        setAuthModalState((prev) => ({...prev, type}));
    }
    return (<form className='sapce-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 pt-7'>
        <h3 className='text-xl font-medium text-black'>Sign in with your student ID</h3>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-500 pt-2'>
                Email
            </label>
            <input type='email' name='email' id='email' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                text-black
            '    
            />
        </div>
        <div>
            <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-500 pt-2'>
                Password
            </label>
            <input type='password' name='password' id='password' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                text-black
            '    
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-red-800 hover:bg-red-600 mt-9
        '>
            Login
        </button>
        {/* <div className='flex w-full h-end justify-center pt-3'>
            <Link href="/app/Modals/ResetPassword" legacyBehavior>   
                <a className='text-sm block hover:underline'>Forgot Password?</a>
            </Link>
        </div> */}
        <div className='flex w-full h-end justify-center pt-3'>
            <button className='flex w-full h-end justify-center pt-3' onClick={() => handleClick('forgotPassword')}>
                <a className='text-sm block hover:underline'>Forgot password?</a>
            </button>
        </div>
        
    </form>)
}
export default Login;