

const Title = ({heading,subheading}) => {
    return (
        <div className="text-center flex flex-col p-8 gap-4 w-5/12 mx-auto">
            <p className="text-[#D99904] text-xl italic">---{subheading}---</p>
            <h1 className="text-[#151515] text-4xl border-y-4 py-3">{heading}</h1>

        </div>
    );
};

export default Title;