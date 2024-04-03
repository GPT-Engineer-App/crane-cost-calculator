# crane-cost-calculator

imple cost calculation application depending on the type of crane, you can follow these steps: Define the constants for the costs per kilometer and the base cost for each type of crane: javascriptCopy code const costs = { A: { costPerKm: 18.82, baseCost: 528.69 }, B: { costPerKm: 20.62, baseCost: 607.43 }, C: { costPerKm: 23.47, baseCost: 721.79 }, D: { costPerKm: 32.35, baseCost: 885.84 }, }; Create a function to calculate the total cost according to the type of crane and the distance: javascriptCopy code const calculateCost = (type, distance) => { const { costPerKm, baseCost } = costs[type]; return baseCost + costPerKm * distance; }; It uses code to prompt the user to enter the crane type and distance, and then displays the total cost: javascriptCopy code const craneType = prompt('Enter crane type (A, B, C or D):'); const distance = parseFloat(prompt('Enter the distance in kilometers:')); if (costs[CraneType]) { constTotalCost = calculateCost(CraneType, distance); console.log(`Total cost is: $${totalcost.toFixed(2)}`); } else { console.log('Invalid crane type. Must be "A", "B", "C" or "D".'); }

 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/crane-cost-calculator.git
cd crane-cost-calculator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
