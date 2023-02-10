// import { createSelector } from "@reduxjs/toolkit";
// import { categoryFilters } from "./constants";


export const getCategoryFilter = state => state.filters.category;

export const getPets = state => state.pets.items;


// export const selectVisiblePets = createSelector(
//   [getPets, getCategoryFilter],
//     (pets, statusFilter) => {
//         console.log('pets',pets)
      
//    switch (statusFilter) {
//     case categoryFilters.sell:
//       return pets.filter(pet => pet.category==='sell');
//     case categoryFilters.lostFound:
//       return pets.filter(pet => pet.category==='lost/found');
//     case categoryFilters.inGoodHands:
//       return pets.filter(pet => pet.category==='in good hands');
//     default:
//       return pets;
//     }
//   }
// );