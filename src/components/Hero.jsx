const Hero = () => {
  return (
    <div id="intro" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img
          alt="Noemi"
          src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/60873400_2451031878242219_48501407816351744_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=N_h3kzdh74sAX9_9spi&_nc_ht=scontent-lcy1-1.xx&oh=00_AfAflIPbXSoYQiqYZHdJ9AldbSx3tlJjEy6l9KVnGr-BFA&oe=646F3001"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="pl-1.5">
          <h1 className="text-5xl font-bold">Enza Noemi Caggiano</h1>
          <p className="py-6">
            Junior Software Developer 
          </p>
          <p>
            I am a passionate and creative developer, always positive and proactive,
            with a great willigness to learn. After an intensive 6 months
            full-time course I am now seeking an opportunity to change my future
            and enter in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
