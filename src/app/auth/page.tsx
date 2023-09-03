"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import AuthModal from '../Modals/AuthModal';
import ResetPassword from '../Modals/ResetPassword';
import { useRecoilValue } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';


type authProps = {
    
};

const page:React.FC<authProps> = () => {
    const authModal = useRecoilValue(AuthModalState)
    return (
        <div className='bg-gradient-to-b from-red-200 to-blck h-screen relative'>
            <div className='max-w-8xl mx-auto'>
                <Navbar/>
                {/* {authModal.isOpen && <AuthModal/>} */}
                <AuthModal/>
            </div>
        </div>
    )
}
export default page;