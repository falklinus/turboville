import { signOut, signIn } from 'next-auth/react'
import { trpc } from '../utils/trpc'

export const AuthShowcase: React.FC = () => {
  const { data: sessionData } = trpc.auth.getSession.useQuery()

  return (
    <div className='flex items-center justify-between gap-8'>
      {sessionData && (
        <div>
          <p className='text-2xl text-indigo-500'>
            Logged in as {sessionData?.user?.name}
          </p>
          <p className='text-sm text-gray-500'>Id: {sessionData?.user?.id}</p>
        </div>
      )}
      <button
        className='rounded-md border border-indigo-700 bg-indigo-500 px-4 py-2 text-xl shadow-lg text-violet-100 hover:bg-indigo-700'
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
