import Rightcontent from "./Rightcontent";
import Leftcontent from "./leftcontent";

const Page1content = (props) => {
  return (
    <div className="pb-16  px-18 gap-10 flex items-center justify-between h-[90vh]">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
}

export default Page1content