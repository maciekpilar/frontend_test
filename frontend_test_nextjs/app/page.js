"use client";
import { useState } from "react";

import "./styles/page.scss";

export default function Home() {
  const jsonData = [
    { id: 1, text: "This is the first content." },
    { id: 2, text: "This is the second content." },
    { id: 3, text: "This is the third content." },
    { id: 4, text: "This is the fourth content." },
    { id: 5, text: "This is the fifth content." },
    { id: 6, text: "This is the sixth content." },
    { id: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    {
      id: 8,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 10,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      id: 11,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [content, setContent] = useState([jsonData[10].text]);

  const handleReplace = () => {
    if (selectedOption === "option1") {
      setContent([jsonData[0].text]);
    } else if (selectedOption === "option2") {
      setContent([jsonData[1].text]);
    } else if (selectedOption === "option3") {
      const randomContent =
        jsonData[Math.floor(Math.random() * (jsonData.length - 2)) + 2].text;
      setContent([randomContent]);
    }
  };

  const handleAppend = () => {
    if (selectedOption === "option1") {
      const newText = jsonData[0].text;
      if (!content.includes(newText)) {
        setContent((prevContent) => [...prevContent, newText].sort());
      } else {
        alert("Content is already present.");
      }
    } else if (selectedOption === "option2") {
      const newText = jsonData[1].text;
      if (!content.includes(newText)) {
        setContent((prevContent) => [...prevContent, newText].sort());
      } else {
        alert("Content is already present.");
      }
    } else if (selectedOption === "option3") {
      let randomContent;
      let attempts = 0;
      do {
        randomContent =
          jsonData[Math.floor(Math.random() * (jsonData.length - 2)) + 2].text;
        attempts++;
        if (attempts > 10) {
          alert("Unable to add unique content.");
          return;
        }
      } while (content.includes(randomContent));
      setContent((prevContent) => [...prevContent, randomContent].sort());
    }
  };

  return (
    <div className="page">
      <h1 className="page__hero">Nagłówek H1</h1>
      <div className="page__hero_divider" />
      <div className="page__content_box">
        <div className="page__content_column item1">
          <h2>Blok pierwszy</h2>
          <div>
            <input
              type="radio"
              id="option1"
              name="option"
              onChange={() => setSelectedOption("option1")}
            />
            <label htmlFor="option1">Opcja pierwsza</label>
          </div>
          <br />
          <div>
            <input
              type="radio"
              id="option2"
              name="option"
              onChange={() => setSelectedOption("option2")}
            />
            <label htmlFor="option2">Opcja druga</label>
          </div>
          <br />
          <div>
            <input
              type="radio"
              id="option3"
              name="option"
              onChange={() => setSelectedOption("option3")}
            />
            <label htmlFor="option3">Opcja losowa</label>
          </div>
        </div>
        <div className="page__content_column item2">
          <h2>Blok drugi</h2>
          <div>
            <button onClick={handleReplace} className="page__content_button">
              Zastąp
            </button>
            {content.length > 9 ? (
              <button
                disabled
                onClick={handleAppend}
                className="page__content_button disabled"
              >
                Doklej
              </button>
            ) : (
              <button onClick={handleAppend} className="page__content_button">
                Doklej
              </button>
            )}
          </div>
        </div>
        <div className="page__content_column item3">
          <h2>Blok z długą nazwą która sama się przytnie ...</h2>
          <div>
            {content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
