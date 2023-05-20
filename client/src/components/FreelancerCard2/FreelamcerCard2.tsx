interface infoCard {
  image: string
  name: string
  skill: string
}

function FreelancerCard2({ image, name, skill }: infoCard) {
  return (
    <div className="flex h-[200px] w-full max-w-[400px] flex-nowrap items-center justify-center gap-3 rounded-md bg-white">
      <div className="">
        <img
          src={`https://images.unsplash.com/photo-${image}`}
          alt={name}
          className="h-[100px] w-[100px] rounded-full object-cover object-center "
        />
      </div>
      <div className="flex max-w-[200px] flex-col flex-wrap text-left ">
        <h4 className="text-[20px] font-bold ">{name}</h4>
        <p className=" font-semibold">{skill}</p>
      </div>
    </div>
  )
}

export default FreelancerCard2
