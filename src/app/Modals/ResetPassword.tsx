import React from 'react';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <form className='sapce-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 pt-7'>
            <h3 className='text-xl font-medium pb-5'>Reset Password</h3>
            <p className='text-sm text-center pb-5'>
                Forgot your password? Enter your email address below and we&apos;ll send 
                you an email to reset your password.
            </p>
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
            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-red-800 hover:bg-red-600 mt-9
            '>
            Reset
            </button>
        </form>
    )
}
export default ResetPassword;