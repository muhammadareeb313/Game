import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../images";
import useSound from "use-sound";
import beep from "../img/beep.mp3";

function fillChar(letter, word, char) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
          letter = letter.slice(0, i) + char + letter.slice(i + 1);
        }
      }
      return letter;
}

function Custom({ arr, heading, navi }) {
  const [play] = useSound(beep);
  let navigate = useNavigate();
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");
  const [data, setData] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [point, setPoint] = useState(0);
  const [life, setLife] = useState(4);
  const [wrongdata, setWrongdata] = useState([]);
  const [wrongimg, setWrongimg] = useState();

  const [result, setResult] = useState();

  useEffect(() => {
    const randomAnimals = Math.floor(Math.random() * arr.length);
    setWord(arr[randomAnimals]);
    if (word) {
      let ix = Math.floor(Math.random() * word.length);
      let updatedLetter = '_'.repeat(word.length);
      updatedLetter = fillChar(updatedLetter, word, word[ix]);
      setLetter(updatedLetter);
    }
  }, [word, refresh,arr]);

  useEffect(() => {
    //success: game over
    if (letter.length > 0 && !letter.includes("_")) {
      setResult("Right");
      play();
      setPoint(point + 1);
    }
  }, [letter]);

  let send = () => {
    if (letter.includes(data) || data.length > 1 || !data) {
      alert(`something went wrong`);
      return false;
    } else {
      let updatedLetter = fillChar(letter, word, data);
      setLetter(updatedLetter);
      setData("")
      if (letter === updatedLetter) {
        setWrongdata((prev) => {
          setWrongdata([...prev, data]);
        });
        setData("");
        setLife(life - 1);

        if (life === 1) {
          setResult("Right");
          setWrongimg("see");
          setLetter(word);
          setWrongdata([]);
          setLife(4);
        }
      }
      //wrong condition
    }
  };

  let restart = () => {
    setRefresh(!true);
    setResult("Wrong");
    setWrongimg();
    setLetter("");
    setWord("");
    setData("");
    setLife(4);
    setWrongdata([]);
    if (point === 5) {
      setPoint(0);
      navigate(`${navi}`);
    }
  };
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "slateblue",
          fontWeight: "bolder",
          margin: "10px",
        }}
      >
        {heading}
      </h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            color: "slateblue",
            fontWeight: "bolder",
          }}
        >
          Life: {life}
        </h3>
        <h3
          style={{
            textAlign: "center",
            color: "slateblue",
            fontWeight: "bolder",
          }}
        >
          Wrongwords: {wrongdata}
        </h3>
      </div>
      <h2
        style={{
          textAlign: "center",
          color: "slateblue",
          fontWeight: "bolder",
          marginTop: "0px",
        }}
      >
        Points: {point}
      </h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          onChange={(e) => {
            setData(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
          id="outlined-basic"
          label="Enter letter"
          variant="outlined"
          placeholder="please enter a letter"
          focused
          value={data}
        />
        <Button
          onClick={send}
          variant="contained"
          style={{ marginLeft: "1px", width: "70px", height: "55px" }}
        >
          Send
        </Button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            letterSpacing: "5px",
            margin: "5px",
            padding: "20px",
            fontSize: "50px",
            color: "slateblue",
          }}
        >
          {letter}
        </h1>
      </div>
      {result === "Right" || wrongimg === "see" ? (
        <>
          <div
            style={{
              margin: "auto",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // marginTop: "10px",
            }}
          >
            {wrongimg !== "see" ? (
              <h1 style={{ color: "slateblue", marginTop: "0px" }}>{result}</h1>
            ) : null}
            <Button 
             onClick={restart} variant="contained">
              Restart
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={images[word]}
              alt=""
              width={"300px"}
              height={"200px"}
              style={{ marginTop: "15px", borderRadius: "10px" }}
            />
          </div>
        </>
      ) : null}
    </>
  );
}

export default Custom;
