import Rightcard from "./Rightcard";


const Rightcontent = (props) => {
    return (
      <div id="Right" className="h-full overflow-x-auto flex felx-nowrap gap-10 w-2/3 p-6 ">
            {props.users.map(function (elem,idx) {
                return <Rightcard key={idx} id={idx} img={elem.img } tag={elem.tag} color={elem.color} />
            })

            }
      </div>
    );
}

export default Rightcontent