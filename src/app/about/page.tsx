/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import { CareerItem } from '@/ui/career-item'
import items from '@/data/about'

export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <div>
      <section className="flex items-center justify-center pb-16">
        <Image
          src="https://github.com/mauriciomutte.png"
          height={250}
          width={250}
          alt="Foto de perfil"
          className="rounded-[50%] mr-8 w-full"
        />
        <div className="">
          <h1 className={'font-bold text-2xl my-4 gradient'}>
            It is a pleasure to have you here!
          </h1>
          <p className="text-zinc-400 text-base my-4">
            Allow me to introduce myself. I'm Maurício Mutte, a 22-year-old
            Frontend Software Engineer from Brazil.
          </p>
          <p className="text-zinc-400 text-base my-4">
            My passion for building innovative solutions led me to utilize
            programming as a tool to create new and exciting projects. I
            discovered my passion for programming at a young age and have since
            been able to apply my skills and knowledge to real projects for
            large companies.
          </p>
          <p className="text-zinc-400 text-base my-4">
            I love working in teams and sharing what I know with others. That's
            why I created this blog to help people out and promote the "Learn In
            Public" concept. When I'm not coding (or contributing to open-source
            projects), I'm doing stuff like reading, listening to music, playing
            video games (FPS games are my favorite), or binge-watching TV shows.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <h1 className="font-bold text-2xl my-4">
          A brief overview of my career
        </h1>
        {items.map((item) => (
          <CareerItem key={item.occupation} {...item} />
        ))}
      </section>
    </div>
  )
}
