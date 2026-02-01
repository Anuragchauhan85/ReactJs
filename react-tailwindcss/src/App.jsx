import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";


const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Underserved",
      color: "royalblue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661657504327-4c9f9466105a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underbanked",
      color: "pink",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641750782-83267bc73817?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Saitsfied",
      color: "lightseagreen",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661718961194-3c8ca9a0c97e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underbanked",
      color: "orange",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1732098508853-6f984fa81819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Satisfied",
      color: "IndianRed",
    },
  ];

  return (
    <div>
      <Section1 users={users } />
      <Section2 />
    </div>
  );
}

export default App