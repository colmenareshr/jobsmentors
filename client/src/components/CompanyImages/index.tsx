const CompanyImages = () => {
  const companiesInfo = [
    {
      image: `../src/assets/images/company-img-1.svg`,
      alt: 'Texto 1'
    },
    {
      image: `../src/assets/images/company-img-2.svg`,
      alt: 'Texto 2'
    },
    {
      image: `../src/assets/images/company-img-3.svg`,
      alt: 'Texto 3'
    },
    {
      image: `../src/assets/images/company-img-4.svg`,
      alt: 'Texto 4'
    }
  ]
  return (
    <figure className="flex items-center justify-center gap-4 py-5">
      {companiesInfo.map((company) => (
        <img key={companiesInfo.length} src={company.image} alt={company.alt} />
      ))}
    </figure>
  )
}

export default CompanyImages
