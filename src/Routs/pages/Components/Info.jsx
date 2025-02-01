import bg from "../../../assets/assets/home/chef-service.jpg"

const Info = () => {
  return (
    <div className="w-full md:h-[300px] lg:h-[672px] bg-cover bg-center  md:relative my-40"   style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-amber-500 md:bg-white p-4  mx-auto md:absolute text-center md:left-[26px] md:bottom-[50px] md:w-[715px] bottom-8 lg:w-[1096px] lg:p-24 lg:left-[112px] lg:bottom-48">
        <h1 className="text-4xl logo mb-3">Bistro Boss</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quod qui corporis vel eius obcaecati adipisci maiores a? A veniam non molestias sunt dolorum explicabo, ullam accusamus harum autem eveniet quas cumque illo facere officiis reiciendis ut, error, omnis minima quae. Blanditiis sed quod incidunt eligendi earum molestias harum autem.</p>
      </div>
    </div>
  );
};

export default Info;
