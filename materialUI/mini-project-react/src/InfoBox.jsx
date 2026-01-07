import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"; 
import hazeImg from "./assets/haze.jpg";
import hotdayImg from "./assets/hotday.jpg"
import rainImg from "./assets/rain.jpg";
import winterImg from "./assets/winter.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({info}) {


  return (
    <div className="Box">
      <div className="infoBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            image={
              info.humidity > 80
                ? rainImg
                : info.temp > 15
                ? hotdayImg
                : winterImg
            }
            component="img"
            alt="green iguana"
            sx={{ height: 140 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempmin}&deg;C</p>
              <p>Max Temp = {info.tempmax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels
                like = {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
