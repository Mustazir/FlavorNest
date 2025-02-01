import { useEffect, useState } from "react";
import Title from "../../Shared/title";
import MenuItems from "../../Shared/MenuItems";


const PopulerMenu = () => {

    const [menu,setmenu]=useState([]);
    useEffect(( )=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populerItem=data.filter(item=>item.category==="popular")
            setmenu(populerItem)})
    },[])

    return (
        <section>
            <Title heading={'FROM OUR MENU'} subheading={'---Check it out---'}></Title>


            <div className="grid grid-cols-2 gap-8 mb-8">
                
                {
                    menu.map(item => <MenuItems key={item._id} item={item} ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;