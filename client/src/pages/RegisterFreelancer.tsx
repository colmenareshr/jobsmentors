import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const RegisterFreelancer = () => {
  const [about, setAbout] = useState('')

  const handleEditorChange = (content) => {
    setAbout(content)
  }
  return (
    <section className="mt-28 w-full py-16">
      <div className="container mx-auto max-w-[1024px] bg-sky p-16 text-center md:px-0">
        <form className="flex flex-col gap-5 px-5" action="">
          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Teléfono</label>
              <input type="text" id="phone" name="phone" />
            </div>
          </div>

          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="birth">Fecha de Nacimiento</label>
              <input type="date" id="birth" name="birth" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Género</label>
              <select id="gender" name="gender">
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
                <option value="personalizate">Personalizado</option>
                <option value="non-info">Prefiero no informar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 text-left">
            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" name="address" />
          </div>

          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="hardSkills">Habilidades</label>
              <input
                type="text"
                id="hardSkills"
                name="hardSkills"
                placeholder="Javascript, MongoDB..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="career">Carrera</label>
              <select name="career" id="career">
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="fullstack">Full-stack</option>
                <option value="qa">QA</option>
                <option value="dba">DBA</option>
                <option value="devops">DevOps</option>
                <option value="pm">PM</option>
                <option value="tech-lead">Tech Lead</option>
                <option value="ux-design">UX Design</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 text-left">
            <label>Más sobre ti</label>
            <div className="">
              <ReactQuill
                className="border-gray-300 h-40 rounded border p-2"
                value={about}
                onChange={handleEditorChange}
                theme="snow"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterFreelancer
