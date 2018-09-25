import * as React from 'react';
type Props = {
	children?: JSX.Element //want children to have jsx type
}
const Scroll = (props: Props) => { //add Props to props 
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;