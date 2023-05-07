/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import { CareerItem } from '@/ui/career-item'
import items from '@/data/about'
import styles from '@/styles/About.module.css'

export default function AboutPage() {
  return (
    <div>
      <section className={styles.section__about}>
        <div className={styles.section__about__image}>
          <Image
            src="https://github.com/mauriciomutte.png"
            height={250}
            width={250}
            alt="Foto de perfil"
          />
        </div>
        <div>
          <h1 className={`${styles.section__about__title} gradient`}>
            It is a pleasure to have you here!
          </h1>
          <p>
            Allow me to introduce myself. I'm Maurício Mutte, a 21-year-old
            Frontend Software Engineer from Brazil.
          </p>
          <p>
            My passion for building innovative solutions led me to utilize
            programming as a tool to create new and exciting projects. I
            discovered my passion for programming at a young age and have since
            been able to apply my skills and knowledge to real projects for
            large companies.
          </p>
          <p>
            I love working in teams and sharing what I know with others. That's
            why I created this blog to help people out and promote the "Learn In
            Public" concept. When I'm not coding (or contributing to open-source
            projects), I'm doing stuff like reading, listening to music, playing
            video games (FPS games are my favorite), or binge-watching TV shows.
          </p>
        </div>
      </section>

      <section className={styles.section__career}>
        <h1>A brief overview of my career</h1>
        {items.map((item) => (
          <CareerItem key={item.occupation} {...item} />
        ))}
      </section>
    </div>
  )
}
