import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/perfil.jpg"
          alt="Ivan Romero profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hello,</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Software Engineer with over 3 years of experience in backend
          development, machine learning, and distributed systems. I'm passionate
          about building end-to-end applications and enjoy working on projects in
          tech environments.
        </p>
        <p>
          I have a strong foundation in Python, Django, relational databases, and
          production deployments. I am currently completing a Master's degree in
          Advanced Telecommunications Technologies, specializing in Deep
          Learning for Multimedia Processing. I'm always eager to tackle the
          next challenge and learn new technologies.
        </p>
        <p>
          You can find more about my work on{" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>{" "}
          or see my projects on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>
          .
        </p>
        <p>
          Outside of technology, my hobbies include photography, traveling, and
          mountaineering.
        </p>
      </div>
    </section>
  );
}