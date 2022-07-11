import React from "react";
import useNumberList from '../hooks/useNumberList'
// import { v4 as uuid } from "uuid";
type List1Props = {
  // TODO
  initialValues:any;
};
const List1 = (props: List1Props) => {
const [value,setValue]=React.useState()
  const [list,  { appendStart,popEnd, clear, reset  }]: any = useNumberList(props.initialValues);

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      
      <div data-testid="list1-element">{list.map((l: any) => (
        <div>{l}</div>
      ))}</div>
      

      
      <input data-testid="list1-input"  value={value} onChange={(e:any) => setValue(e.target.value)}/>
      <button data-testid="list1-btn-append-start"  onClick={() => appendStart(value)}
      >
        AppendStart
        {/* Append to start of list btn */}
      </button>
      <button data-testid="list1-btn-pop-end"  onClick={() => popEnd()}>
        {/* po last element btn */}
        pop End

      </button>
      <button data-testid="list1-btn-clear"   onClick={() => clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset"   onClick={() => reset()}>
        {/* Reset list to default value btn */}
        Reset
      </button>

  

     
    </div>
  );
};

export default List1;
