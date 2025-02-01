import Card from "../../../Shared/Card";
import Title from "../../../Shared/title";
import useMenu from "../../../Shared/useMenu";

const Recommends = () => {
    const [menu] = useMenu();

    return (
        <>
        <div>
            <Title heading={'CHEF RECOMMENDS'} subheading={'Should Try'}></Title>
        </div>

        <Card>
            
        </Card>
        </>
    );
};

export default Recommends;