import React, {Component} from 'react';


const Searchbar = props => (

<div class="row">
  <form class="col s12">

    <div class="row">
      <div class="input-field col s6">
      <i class="material-icons prefix cyan-text text-accent-2">search</i>
        <input id="search" type="text" class="validate" onChange={e => {
          props.runSearch(e.target.value)
        }} />
        <label for="search">Search</label>
      </div>
    </div>

  </form>
 </div>

);

export default Searchbar;
