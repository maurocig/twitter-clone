import { SignIn, SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { api } from '~/utils/api';

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="text-white">
          {!user.isSignedIn && <SignInButton />}
          {user.isSignedIn && <SignOutButton />}
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
            // key is the way in which react uses to identify what should or shouldn't be updated. will keep the render time down slightly.
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
