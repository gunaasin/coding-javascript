import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
  const codesnip = {
    javascript: `\n // Get reference to the character element
    const character = document.getElementById('character');

    // Character position variables
    let posX = 0;
    let posY = 0;

    // Event listener for moving the character forward
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            // Move character forward (increase X position)
            posX += 10;
            character.style.left = posX + 'px';
        }
    });

    // Event listener for moving the character backward
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            // Move character backward (decrease X position)
            posX -= 10;
            character.style.left = posX + 'px';
        }
    });

    // Event listener for making the character jump
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            // Move character upward (increase Y position)
            posY -= 100;
            character.style.bottom = posY + 'px';

            // Simulate gravity by resetting character's position after a short delay
            setTimeout(() => {
                posY = 0;
                character.style.bottom = posY + 'px';
            }, 500);
        }
    });
    
    `}
    const answer = {
      javascript: `\n // Get reference to the character element
      const character = document.getElementById('character');
  
      // Character position variables
      let posX = 0;
      let posY = 0;
  
      // Event listener for moving the character forward
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowRight') {
              // Move character forward (increase X position)
              posX += 10;
              character.style.left = posX + 'px';
          }
      });
  
      // Event listener for moving the character backward
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowLeft') {
              // Move character backward (decrease X position)
              posX -= 10;
              character.style.left = posX + 'px';
          }
      });
  
      // Event listener for making the character jump
      document.addEventListener('keydown', function(event) {
          if (event.key === 'ArrowUp') {
              // Move character upward (increase Y position)
              posY -= 100;
              character.style.bottom = posY + 'px';
  
              // Simulate gravity by resetting character's position after a short delay
              setTimeout(() => {
                  posY = 0;
                  character.style.bottom = posY + 'px';
              }, 500);
          }
      });
      
      `}
  return (
    <>
    <Maincom  title={"Event Handling"}
  
    steps={['Event Handling in JavaScript: In JavaScript, event handling is commonly done using the addEventListener method to attach event listeners to DOM elements. Event listeners can listen for various events, such as click, mouseover, keydown, submit, etc.',
   
    ' Event handling in programming refers to the process of capturing and responding to events that occur during the execution of a program. Events can include user interactions, such as clicking a button, typing on a keyboard, or resizing a window, as well as system-generated events like timers or network activity.',
  
    'Step 4: Adding an event listener for keypress events',
    
    'Step 5: Explain event propagation, including capturing and bubbling phases.',
   
    
    
    'Explanation: Event handling in JavaScript involves adding event listeners to HTML elements to listen for specific events, such as clicks, keypresses, mouse movements, etc. When the specified event occurs, the associated event handler function is executed, allowing developers to respond to user actions. Event propagation refers to the process of an event being propagated through the DOM hierarchy, from the target element to its ancestors (capturing phase) and then back down to the target element (bubbling phase). Developers can use event.stopPropagation() to stop event propagation and prevent events from bubbling up through the DOM hierarchy.'
   ]}
       codesnip={codesnip}
       answer={answer}/>
       
    </>
  )
}
