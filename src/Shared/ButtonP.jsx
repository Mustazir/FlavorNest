

const ButtonP = ({ButtonInfo}) => {
    return (
        <button className="btn btn-primary uppercase text-xl px-5  text-orange-400 bg-slate-100 border-gray-500 shadow-md shadow-gray-700 hover:bg-slate-600 active:bg-gray-800 hover:text-white">
            <p className="p-0">{ButtonInfo}</p>
          </button>
    );
};

export default ButtonP;