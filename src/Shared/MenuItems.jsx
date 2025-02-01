

const MenuItems = ({item}) => {

    const {image,name,recipe,price}=item;
    return (
        <div className="flex space-x-4">
            <img className="w-28" style={{borderRadius : "0px 200px 200px 200px"}} src={image} alt="" />
            <div className="">
                <h1 className="uppercase">{name}-------------</h1>
                {recipe}
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItems;