import EquipCard3 from 'components/EquipCard3/EquipCard3'
import EquipFinal from 'components/EquipFinal/EquipFinal'
import EquipHero from 'components/EquipHero/EquipHero'
import EquipImage from 'components/EquipImage/EquipImage'
import EquipMision from 'components/EquipMision/EquipMision'
import EquipVision from 'components/EquipVision/EquipVision'

function AboutPage() {
  return (
    <main className="container mx-auto  max-w-full bg-white mt-24 text-center">
      <EquipHero />
      <EquipCard3 />
      <EquipMision />
      <EquipImage />
      <EquipVision />
      <EquipFinal />
    </main>
  )
}

export default AboutPage
