import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoWordpress
} from 'react-icons/io5'
const SingleFreelancerPage = () => {
  return (
    <section className="w-full">
      <div className="mx-auto -mb-36 max-w-full py-16"></div>
      <div className="mx-auto max-w-full pt-32">
        <div className="container mx-auto bg-white px-3 py-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className=" h-auto w-[180px] rounded-full"
              src="https://github.com/colmenareshr.png"
              alt="Humberto Colmenares"
            />
            <h1>Humberto Colmenares</h1>
          </div>
          <div className="border-b-1 flex items-center justify-center gap-2 border-b-black/50 py-4">
            <button className="button-secondary">Editar perfil</button>
            <button className="text-black">Portfolio</button>
          </div>
        </div>
        <div className="container mx-auto border-t border-t-emerald/30 bg-white p-12">
          <h3>About me</h3>
          <p className="text-black/80">
            I am a person who is passionate about remote work and the area of
            ​​technology. 🎯 I am currently looking for a job in this sector and
            be able to contribute my knowledge and experience, both as a full
            stack web developer, and in the DevOps culture and thus face the
            challenges that arise in the company. I seek to grow in knowledge,
            experience and teamwork, in a stable work environment in the area of
            ​​technology. 👉 I have been working as a freelancer since 2016.
            Most of my work experience has been as a web designer with WordPress
            on teleworking platforms. I have also taken on projects individually
            that come by recommendation. Each and every one has been a great
            challenge, learning and enjoyable and communicative work. Currently
            I am still preparing to enter a work environment as a Full Stack and
            DevOps web developer in various online training courses at different
            institutions that offer technology training. 🙌
          </p>
          <div className="flex items-center gap-3 pt-2">
            <IoLogoGithub size={25} />
            <IoLogoLinkedin size={25} />
          </div>
        </div>
        <div className="container mx-auto border-t border-t-emerald/30 bg-white p-12">
          <h3>Expertise</h3>
          <div className="flex items-center gap-2">
            <IoLogoReact />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2">
            <IoLogoWordpress />
            <span>WordPress</span>
          </div>
          <div className="flex items-center gap-2">
            <IoLogoNodejs />
            <span>Node</span>
          </div>
        </div>
        <div className="container mx-auto border-t border-t-emerald/30 bg-white p-12">
          <h3>Projects</h3>
          <div>
            <div className="flex items-center justify-between ">
              <h4>JobsMentors</h4>
              <button className="button-secondary">View Projects</button>
            </div>
            <span>2023</span>
            <p>
              CRUD interface The proposal of the work is, from the theme drawn
              for the group, to develop an application in React, integrated to a
              REST...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-12">
        <button className="button">Delete profile</button>
      </div>
    </section>
  )
}
export default SingleFreelancerPage
