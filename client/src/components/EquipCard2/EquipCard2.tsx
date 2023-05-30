interface infoEquipCard {
  image: string
  name: string
  skill: string
}

function EquipCard2({ image, name, skill }: infoEquipCard) {
  return (
  
    <div className="flex flex-col h-[200px] w-full max-w-[300px] flex-nowrap items-center justify-center gap-4 rounded-md bg-white">
      <div className="">
        <img
          src={`${image}`}
          alt={name}
          className="h-[100px] w-[100px] rounded-full object-cover object-center "
        />
      </div>
      <div className="flex max-w-[300px] flex-col flex-wrap text-center ">
        <h4 className="text-[20px] font-bold ">{name}</h4>
        <p className=" font-semibold">{skill}</p>
      </div>
    </div>
  )
}

export default EquipCard2
