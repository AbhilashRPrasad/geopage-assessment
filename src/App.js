import React, { useState } from "react";
import { Container, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import data from "./countries.json";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleSubDistrictChange = (event) => {
    setSelectedSubDistrict(event.target.value);
    setSelectedVillage("");
  };

  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Linked Dropdown Menus
      </Typography>
      <Typography variant="h6" gutterBottom>
        <div margin="normal">Submitted by Abhilash R Prasad</div>
        <div>contact - 9886737745 Email: arprasad.abhi@gmail.com</div>
      </Typography>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Select Country</InputLabel>
        <Select value={selectedCountry} onChange={handleCountryChange} label="Select Country">
          {data.map((item, index) => (
            <MenuItem key={index} value={item.Country}>
              {item.Country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCountry && (
        <>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Select State</InputLabel>
            <Select value={selectedState} onChange={handleStateChange} label="Select State">
              {data
                .filter((item) => item.Country === selectedCountry)
                .map((item, index) => (
                  <MenuItem key={index} value={item.State}>
                    {item.State}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          {selectedState && (
            <>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Select District</InputLabel>
                <Select value={selectedDistrict} onChange={handleDistrictChange} label="Select District">
                  {data
                    .filter((item) => item.Country === selectedCountry && item.State === selectedState)
                    .map((item, index) => (
                      <MenuItem key={index} value={item.District}>
                        {item.District}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {selectedDistrict && (
                <>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel>Select Sub District</InputLabel>
                    <Select value={selectedSubDistrict} onChange={handleSubDistrictChange} label="Select Sub District">
                      {data
                        .filter(
                          (item) =>
                            item.Country === selectedCountry &&
                            item.State === selectedState &&
                            item.District === selectedDistrict
                        )
                        .map((item, index) => (
                          <MenuItem key={index} value={item["Sub District"]}>
                            {item["Sub District"]}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  {selectedSubDistrict && (
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Select Village</InputLabel>
                      <Select value={selectedVillage} onChange={handleVillageChange} label="Select Village">
                        {data
                          .filter(
                            (item) =>
                              item.Country === selectedCountry &&
                              item.State === selectedState &&
                              item.District === selectedDistrict &&
                              item["Sub District"] === selectedSubDistrict
                          )
                          .map((item, index) => (
                            <MenuItem key={index} value={item.Village}>
                              {item.Village}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default App;
