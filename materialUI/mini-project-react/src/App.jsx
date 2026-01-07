import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./weatherApp";
// import './App.css'

function App() {
  return (
    <>
      <WeatherApp/>
    </>
  );
}

export default App;

// let handleClick = () => {
  //   console.log("button is clicked");
  // };

/* <h1>MaterialUI demo</h1>
      <Button variant="contained" onClick={handleClick}>
        click me
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        click me2
      </Button> */