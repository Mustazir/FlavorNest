// import Card from "../../../Shared/Card";
// import Title from "../../../Shared/title";
// import useMenu from "../../../Shared/useMenu";

// const Recommends = () => {
//   const [menu] = useMenu();
//   const recommend = menu.filter((item) => item.category === "offered").slice(0, 3);

//   return (
//     <>
//       <div>
//         <Title heading="CHEF RECOMMENDS" subheading="Should Try" />
//       </div>

     

//       <div className="md:flex gap-6 mx-auto p-5  ">
//         {recommend.map((item) => (
//           <Card
//             key={item._id}
//             name={item.name}
//             description={item.recipe}
//             img={item.image}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Recommends;
