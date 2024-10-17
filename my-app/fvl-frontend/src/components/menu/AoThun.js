import React from "react";
import ItemsList from "../Item";
import { combo } from '../../data/combo';
import MenuCategories from "../MenuCartegory"; // Importing the new category component

export default function AoThun() {
const filteredCombo = combo.filter(item => item.cartegory_id === "aothun");
  return (
    
    <div>
      {/* Render category buttons */}
      <MenuCategories />
      

      {/* Render the items list */}
      <div className='grid grid-cols-4 gap-4 p-4'>
          {filteredCombo.map(item => (
            <ItemsList key={item.id} {...item} />
          ))}
        </div>
      </div>
  );
}
