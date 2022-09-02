import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Page() {
  const { data: session, status } = useSession()
  const router = useRouter();

  if (status === "loading") {
    return <p>Carregando...</p>
  }

  if (status === "unauthenticated") {
    router.push('/api/auth/signin')
    return <p>Você precisa estar logado para acessar a radio!</p>
  }

  return (
    <>
      <h1>Radio - Pedir musica</h1>
      <p>Você consegue ver esta pagina pois você está logado.</p>
    </>
  )
}