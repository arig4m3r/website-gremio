import React from "react";
import Image from 'next/image'

export default function Features() {
  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] flex justify-center">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Nossas metas
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                O que oferecemos
              </h2>
              <p className="text-base text-body-color">
                Veja abaixo algumas de nossas metas que iremos cumprir durante o nosso trageto no Grêmio.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
              >
                <Image
                  src="https://blog.sympla.com.br/wp-content/uploads/2022/06/como-organizar-um-campeonato-de-video-game-capa-2.png"
                  width={600}
                  height={290}
                  alt={'Imagem ilustrativa de um campeonato de jogos virtuais'}
                />
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">Campeonatos</h4>
              <p className="text-body-color">
                Realizar campeonato de games, interclasses, cartas, e leitura coletiva
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
              >
                <Image
                  src="https://media.istockphoto.com/vectors/cartoon-people-on-music-festival-vector-illustration-flat-characters-vector-id1219009474?k=20&m=1219009474&s=170667a&w=0&h=GUxYezSG8W05khRiAiIQWpIZIAfeMweVCLCrSvItcZc="
                  width={600}
                  height={290}
                  alt={'Imagem ilustrativa de um festival'}
                />
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">Festivais</h4>
              <p className="text-body-color">
                Festivais de Dança, Músicas, Desfile, Teatro, Mimicas
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
            >
              <div
                className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
              >
                <Image
                  src="https://static.vecteezy.com/ti/vetor-gratis/p3/202093-feira-de-ciencias-2es-gr%C3%A1tis-vetor.jpg"
                  width={933}
                  height={632}
                  alt={'Imagem ilustrativa de uma feira de ciencias'}
                />
              </div>
              <h4 className="font-semibold text-xl text-dark mb-3">Feiras</h4>
              <p className="text-body-color">
              Promover feira de ciências, evento aberto ao público para interagir escola e comunidade; e 
              também, buscar parcerias com profissionais para garantir a sustentabilidade;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
