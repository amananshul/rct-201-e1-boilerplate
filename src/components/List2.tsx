import React from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialValues:any;
};
const List2 = (props: List2Props) => {
  const [value,setValue]=React.useState()
  const [list,  { appendEnd,appendStart, popStart,popEnd, clear, reset, map }]: any = useNumberList(props.initialValues);

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */}
      {list.map((l: any) => (
        <div>{l}</div>
      ))}
      </div>

      <input data-testid="list2-input"    value={value} onChange={(e:any) => setValue(e.target.value)}/>
      <button data-testid="list2-btn-append-end" onClick={() => appendEnd(value)}>
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}
        PopStart
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        Clear
        {/* Button to  clear the list */}
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset()}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
