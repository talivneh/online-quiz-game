import React from "react";
//mui-components
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
//types
import { GameSettingsObject } from "../App";
import { Difficulty } from "../API";
//styles
import { StyledPaper } from "./styles/GameSettings.style";

type Props = {
  changeGameSettings: (
    label: string,
    value: number | string | Difficulty[]
  ) => void;
  gameSettings: GameSettingsObject;
};

const GameSettings = ({ changeGameSettings, gameSettings }: Props) => {
  const handleNameChange = (e: any) => {
    changeGameSettings("name", e.target.value);
  };

  const handleDifficultyChange = (value: Difficulty[]) => {
    changeGameSettings("difficulty", value);
  };

  const handleTimeChange = (e: any) => {
    changeGameSettings("time", e.target.value);
  };

  const difficultyOptions = [
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD,
  ];

  return (
    <StyledPaper elevation={24}>
      <TextField
        required
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleNameChange}
      />
      <Autocomplete
        multiple
        id="outlined-multi"
        options={difficultyOptions}
        getOptionLabel={(option) => option}
        value={gameSettings.difficulty}
        onChange={(event: any, newValue: Difficulty[]) => {
          handleDifficultyChange(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Filter by difficulty" />
        )}
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Time per question
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={30}
          name="radio-buttons-group"
          onChange={handleTimeChange}
        >
          <FormControlLabel value={30} control={<Radio />} label={30} />
          <FormControlLabel value={20} control={<Radio />} label={20} />
          <FormControlLabel value={10} control={<Radio />} label={10} />
        </RadioGroup>
      </FormControl>
    </StyledPaper>
  );
};

export default GameSettings;
