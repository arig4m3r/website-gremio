import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn({ providers }: { providers: any[] }) {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="h-12 w-12 mx-auto relative">
              <Image
                src={
                  "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                }
                alt={`Logo`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entre em sua conta
            </h2>
          </div>
          <form
            className="mt-8 space-y-6 bg-slate-200 p-5 rounded-xl"
            action="#"
            method="POST"
          >
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id)}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Entrar com <strong className="px-1">{provider.name}</strong>
                </button>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
