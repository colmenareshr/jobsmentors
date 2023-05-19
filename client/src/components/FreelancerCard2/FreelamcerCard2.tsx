interface infoCard {
  image: string
  nome: string
  skill: string
}

function FreelancerCard2({ image, nome, skill }: infoCard) {
  return (
    <div className="flex h-[200px] w-full max-w-[400px] flex-nowrap items-center justify-center gap-3 rounded-md bg-white">
      <div className="">
        <img
          src={`https://images.unsplash.com/photo-${image}`}
          alt={nome}
          className="h-[100px] w-[100px] rounded-full object-cover object-center "
        />
      </div>
      <div className="flex max-w-[200px] flex-col flex-wrap text-left ">
        <h4 className="text-[20px] font-bold ">{nome}</h4>
        <p className=" font-semibold">{skill}</p>
      </div>
    </div>
  )
}

export default FreelancerCard2
