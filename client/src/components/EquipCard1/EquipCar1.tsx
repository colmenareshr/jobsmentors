import EquipCard2 from 'components/EquipCard2/EquipCard2'
import { Link } from 'react-router-dom'

interface equipeTeam {
  title: string
  color: string
}

export const equipeInfo = [
  {
    image: 'https://avatars.githubusercontent.com/u/101142283?v=4',
    name: 'Pedro Gil Bonett',
    skill: 'Desenvolvedor Full Stack'
  },

  {
    image: 'https://avatars.githubusercontent.com/u/102869871?v=4',
    name: 'José Freites',
    skill: 'Desenvolvedor Full Satck'
  },

  {
    image: 'https://avatars.githubusercontent.com/u/14103160?v=4',
    name: 'Humberto Colmenares',
    skill: 'Desenvolvedor Full Stack'
  },

  {
    image: 'https://avatars.githubusercontent.com/u/105180420?v=4',
    name: 'Samil Moret',
    skill: 'Desenvolvedor Full Satck'
  }
]

function EquipCard1({ title, color }: equipeTeam) {
  return (
    <Link
      to=""
      className="flex flex-wrap items-center justify-center gap-4 py-16"
    >
      {equipeInfo.map((equipe, index) => (
        <EquipCard2
          key={index}
          image={equipe.image}
          name={equipe.name}
          skill={equipe.skill}
        />
      ))}
    </Link>
  )
}

export default EquipCard1
