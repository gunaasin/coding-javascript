import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component8 = () => {
  const codesnip = {
    javascript: `\n// kingdom1
    export const resources = {
      wood: 100,
       food: 150
    
    };
    
    // kingdom2
    export const resources = {
       stone: 50,
      gold: 75,
    };
    
    import { resources as resources1 } from "./kingdom1.js";
    import { resources as resources2 } from "./kingdom2.js";
    import { resources as resources3 } from "./kingdom3.js";
    
    console.log("Kingdom 1 Resources:", resources1);
    console.log("Kingdom 2 Resources:", resources2);
    console.log("Kingdom 3 Resources:", resources3);
    / kingdom1.js
    export const importResource = (resource, amount) => {
      resources[resource] += amount;
    };
    
    // kingdom2.js
    export const exportResource = (resource, amount) => {
      if (resources[resource] >= amount) {
        resources[resource] -= amount;
        return true;
      }
      return false;
    };
    
    // kingdom3.js
    export const defendAgainstThreat = () => {
      // Simulate defending against a threat using modular code organization
    };
    // kingdom1.js
    export const buildLibrary = () => {
      // Simulate building a library to organize code
    };
    
    // kingdom2.js
    export const buildFactory = () => {
      // Simulate building a factory to produce goods
    };
    
    // kingdom3.js
    export const buildMarket = () => {
      // Simulate building a market to trade resources with other kingdoms
    };
    // NPC interactions
    console.log("NPC: Welcome to Kingdom 1! Let me teach you about importing resources...");
    console.log("NPC: In our kingdom, we import resources like wood and stone from neighboring kingdoms to build structures.");
    
    `}
  return (
    <>
    <Maincom  title={" Module System" }
           codesnip={codesnip}
      steps={[' Step 1: Setting Up the Kingdoms (Modules) , Define separate JavaScript files, each representing a kingdom (module) with its unique functionality and resources.',
   
      ' Step 2:  kingdom1  resources =  { wood: 100, food: 150, };',
    
      ' Step 3: kingdom2 resources = {  stone: 50, gold: 75, };',
  
      'Step 4: Exploring the Kingdoms In the main game file, import and explore each kingdom, interacting with its resources.',
      'console.log("Kingdom 1 Resources:", resources1);',
      'console.log("Kingdom 2 Resources:", resources2);',
      'console.log("Kingdom 3 Resources:", resources3);',
      'Step 5: Completing Quests and Challenges Implement functions within each kingdom to simulate quests and challenges related to the module system.',
   
  
    'Step 6: The player to build structures within each kingdom, demonstrating modular code organization.',

 
     
    'Step 6:  Simulate building a library to organize code',
    
    
   
    'Step 6:  Simulate building a factory to produce goods',
    
    'Step 6:  Simulate building a market to trade resources with other kingdoms',
  
    'Step 6:  Interacting with NPCs and Learning Concepts Integrate dialogue with NPCs (non-player characters) to provide guidance and explanations about the module system.',
    
    'Step 6:  NPC interactions',
    'console.log("NPC: Welcome to Kingdom 1! Let me teach you about importing resources...");',
    'console.log("NPC: In our kingdom, we import resources like wood and stone from neighboring..");'
  ]}
    />
    </>
  )
}
