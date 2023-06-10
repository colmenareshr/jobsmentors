import React from 'react'

interface infoCard {
  children: React.ReactNode
  image: string
  name: string
}

function InfoCard({ children, image, name }: infoCard) {
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
        {children}
      </div>
    </div>
  )
}

export default InfoCard
