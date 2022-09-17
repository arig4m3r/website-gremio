import {
  getCsrfToken,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignIn({ csrfToken }: { csrfToken: string }) {
  const router = useRouter();
  const { error } = router.query;

  const [type, setType] = useState("text");

  useEffect(() => {
    setType(typeof window === "undefined" ? "text" : "email");
  }, []);

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

          {error && (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Erro ao se autenticar
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>
                  Você tem certeza que está usando um e-mail da sua instituição
                  ETEC?
                </p>
              </div>
            </div>
          )}
          <div className="mt-8 space-y-6 bg-slate-200 p-5 rounded-xl">
            <form method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <h3 className="text-xl font-bold text-gray-900 pb-3">
                Seu e-mail institucional (@etec.sp.gov.br)
              </h3>
              <div className="pb-4">
                <input
                  type={type}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="luis.felipe92@etec.sp.gov.br"
                  required
                />
              </div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar email
              </button>
            </form>
            {/* {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: router.query.callbackUrl?.toString(),
                    })
                  }
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Entrar com <strong className="px-1">{provider.name}</strong>
                </button>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
