import React from 'react';
const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  let [list, setList] = React.useState(initialArray);

  const appendEnd = (e:any) => {
    if (list.length === 0) {
      setList([1]);
    } else {
      let temp: number[] = [...list];
      temp.push(e);
      setList(temp);
    }
  };
  const appendStart =(e:any)=>{
    console.log(e)
    if(list.length===0){
      setList([1]);
    }
    else{
      let temp: number[]=[...list];
      temp.unshift(e)
      setList(temp);
    }

  }

  const popEnd = () => {
    let temp: number[] = [...list];
    temp.pop();
    setList(temp);
  };
  const popStart = () => {
    let temp: number[] = [...list];
    temp.shift();
    setList(temp);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList(initialArray);
  };

  const map = (el: any) => {
    // console.log(el)
    let temp: number[] = [...list];
    let r: number[] = temp.map((el) => (el*2))
    // console.log(r)
    setList(r);
  };



  return [list, { appendEnd,appendStart, popStart,popEnd, clear, reset, map }];
};

export default useNumberList;
