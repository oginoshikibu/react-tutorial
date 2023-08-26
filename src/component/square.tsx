import React from "react";


type Props = { value?: string }

const Square: React.FC<Props> = ({ value = 0 }) => {

  const handleClick = () => {
    console.log("clicked!");
  }

  return (
    <>
      <button
        className="square"
        onClick={handleClick}
      >{value}</button>;
    </>
  )
}


const Board: React.FC = () => (
  <>
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="board-row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
    </div>
    <div className="board-row">
      <button className="square">6</button>
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  </>
);

export default Board