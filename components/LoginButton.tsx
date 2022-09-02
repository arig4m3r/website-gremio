import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Logado como {session.user!.email} <br />
        <div className="h-12 w-12 relative">
          {" "}
          <Image
            src={session.user!.image!}
            alt={`Avatar de ${session.user?.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <button
          onClick={() => signOut()}
          className="block h-10 px-5 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md hover:bg-gray-100 lg:w-auto"
        >
          Deslogar
        </button>
        {/* <button onClick={() => signOut()}>Deslogar</button> */}
      </>
    );
  }
  return (
    <>
      {/* Não logado <br /> */}
      <button
        onClick={() => signIn()}
        className="block h-10 px-5 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md hover:bg-gray-100 lg:w-auto"
      >
        Entrar
      </button>
      {/* <button onClick={() => signIn()}>Registrar-se</button> */}
    </>
  );
}
