const TestimonialSection = () => {
  return (
    <section
      className="container mx-auto max-w-full bg-[#fff]
    py-14"
    >
      <a
        className="flex flex-col items-center justify-center gap-2 text-center md:mx-auto md:w-full md:max-w-[1000px] md:flex-row md:items-center md:justify-center md:text-left"
        href=""
      >
        <div className="image-info flex flex-col items-center justify-center text-center md:w-[50%]">
          <img
            className="h-auto w-[200px]"
            src="../src/assets/images/testimonial-img-1.jpg"
            alt="Imagen"
          />
          <div className="nombre">
            <span className="font-semibold">Sarah Johnson</span>
          </div>
          <div className="twitter-info">
            <span className="font-bold text-teal/70">@SarahJ_tweets</span>
          </div>
        </div>
        <div className="testimonial-content w-full md:w-[50%]">
          <span>
            <blockquote className="text-2xl">
              <span>
                <strong>
                  Thanks to @jobsmentors, I found an exceptional development
                  team
                </strong>{' '}
                that turned my project into a success. I can't recommend them
                enough!
              </span>
            </blockquote>
          </span>
        </div>
      </a>
    </section>
  )
}

export default TestimonialSection
