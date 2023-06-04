interface infoCard {
  image: string
  name: string
  skill: string
}

function FreelancerInfoCard({ image, name, skill }: infoCard) {
  return (
    <div className="grid h-[200px] w-full max-w-[400px] grid-cols-2 items-center justify-items-center gap-1 rounded-md bg-white">
      <div className="">
        <img
          src={image}
          alt={name}
          className="h-[100px] w-[100px] rounded-full object-cover object-center "
        />
      </div>
      <div className="max-w-[300px] flex-col flex-wrap justify-self-start text-left ">
        <h4 className="text-[20px] font-bold ">{name}</h4>
        <p className=" font-semibold">{skill}</p>
      </div>
    </div>
  )
}

export default FreelancerInfoCard
