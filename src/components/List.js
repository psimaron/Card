import React from 'react';
import Item from './Item';

class List extends React.Component {

    render () {
      return ( 
      <div>
        <Item icon={<i class="huge credit card icon"></i>} title={"Brief"} text={"Complete brief writing or simple guidance on what to include, we've got you covored"}/>
        <Item icon={<i class="huge eye icon"></i>} title={"Search"} text={"In-depth agency search covering; criteria matching, door knocking and due-diligence vetting"}/>
        <Item icon={<i class="huge user plus icon"></i>} title={"Pitch"} text={"Comprehensive pitch management inculiding comms, diary management and pitch hosting"}/>
      </div>
      );
    }
  }

  export default List;