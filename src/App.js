import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  TextField,
  Box,
} from "@mui/material";
function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const [location1, setLocation1] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ec041f40e3fbea8c4ef29c6177a31386`;
  
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      try {
        axios.get(url)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
            setLocation1(location);
            console.log(location1);
            setLocation("");
            console.log(location1);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setData("");
            setLocation1("");
            setLocation("");
          });
      } catch (err) {
        console.error("Error:", err);
        
        setData("");
        setLocation1("");
        setLocation("");
      }
    }
  };
  
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ marginTop: "1vh" }}>
            <div>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  width: {
                    lg: "50%",
                    sm: "50%",
                    xs: "100%",
                  },
                  borderRadius: "10px", // Set the border radius to 10
                  backgroundColor: "white", // Set the background color to white
                  marginLeft: {
                    lg: "25%",
                    sm: "28%",
                    xs: "0",
                  },
                }}
              >
                <TextField
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  placeholder="Enter Location ans press enter"
                  label="Enter the location"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} marginTop="20vh">
          <Typography
            variant="h1"
            style={{ textAlign: "center", color: "white" }}
          >
            {data.main ? `${(data.main.temp.toFixed()-273)}°C` : null}
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: "center", color: "white" }}
          >
            {data.main ? `${data.weather[0].main}` : null}
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: "center", color: "white" }}
          >
            {location1}
          </Typography>
        </Grid>
        {data.name !== undefined &&
        <Grid item xs={12} marginTop="30vh">
          <div style={{ marginTop: "1vh" }}>
            <div>
              <Grid container>
                <Grid
                  item
                  xs={11}
                  sm={6}
                  lg={6}
                  sx={{
                    marginLeft: {
                      xs: "4%",
                      lg: "25%",
                      sm: "25%",
                    },
                  }}
                >
                  <Box
                    width={"auto"}
                    height="auto"
                    borderRadius={7}
                    boxShadow="5"
                    borderColor="#263238"
                    bgcolor="rgba(255,255,255,0.2)"
                    position="relative"
                  >
                    <Grid container paddingTop="2%">
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          {data.main ? `${data.main.feels_like.toFixed()-273}°C` : null}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          {data.main ? `${data.main.humidity}%` : null}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          {data.main ? `${data.wind.speed.toFixed()}MPH` : null}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container paddingBottom="2%" paddingTop="1%">
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          Feels Like
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          Humidity
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          Wind Speed
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        }
      </Grid>
    </div>
  );
}

export default App;
