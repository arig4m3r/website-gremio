import Image from "next/image";

export default function SignIn({ csrfToken }: { csrfToken: string }) {
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
              Verifique o seu e-mail
            </h2>
          </div>

          <div className="mt-8 space-y-6 bg-slate-200 p-5 rounded-xl">
            <h1 className="text-lg">
              Um e-mail acaba de ser enviado para a sua caixa de entrada, acesse
              o e-mail enviado e siga as instruções.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
