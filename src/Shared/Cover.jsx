import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero h-[700px]"
          
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="w-[1320px] h-[450px] text-center justify-center items-center flex flex-col bg-black bg-opacity-50 text-white">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
