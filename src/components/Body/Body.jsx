import React, { useState } from "react";
import Card from "../Card/Card";
import InputCard from "../InputCard/InputCard";

function Body() {
  const [TitleInput, setTitleInput] = useState("");
  const [ContentInput, setContentInput] = useState("");
  const [items, setItems] = useState([]);

  function handleTitleInput(e) {
    setTitleInput(e.target.value);
    console.log(TitleInput);
  }

  function handleContentInput(e) {
    setContentInput(e.target.value);
    console.log(ContentInput);
  }

  function addItem() {
    TitleInput != "" &&
      ContentInput != "" &&
      setItems((prev) => {
        return [...prev, { title: TitleInput, content: ContentInput }];
      });
    setTitleInput("");
    setContentInput("");
    console.log("Item added");
  }

  function deleteItem(index) {
    setItems((prev) => {
      return prev.filter((item, i) => {
        return i !== index;
      });
    });
    console.log("Item deleted");
  }

  return (
    <div className="body">
      <div className="inputDiv">
        <InputCard
          handleClick={addItem}
          handleTitleInput={handleTitleInput}
          handleContentInput={handleContentInput}
          CardWidth="40%"
          height="3rem"
          width="3rem"
          bottom="-16%"
          operation="Add"
          fontSize="1rem"
          titleValue={TitleInput}
          contentValue={ContentInput}
        />
      </div>
      <div className="cardsDiv">
        {items.map((item, index) => {
          return (
            <InputCard
              key={index}
              id={index}
              handleClick={() => {
                return deleteItem(index);
              }}
              CardWidth="85%"
              height="3rem"
              width="3rem"
              bottom="-16%"
              operation="Delete"
              fontSize="0.8rem"
              titleValue={item.title}
              contentValue={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
