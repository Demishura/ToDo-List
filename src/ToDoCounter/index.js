import React, { useEffect, useRef } from "react";
import useSound from 'use-sound';
import mySound from '../Assets/audio.mp3';
import './ToDoCounter.css'

function ToDoCounter({ total, completed }) {
  const [playSound] = useSound(mySound);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (total === completed && !hasCompletedRef.current) {
      playSound();
      hasCompletedRef.current = true;
    }
  }, [total, completed, playSound]);

  return (
    <div>
      {total === 0 ? (
        <h1 className="ContadorDeVictorias">
          No tiene tareas! 😴
        </h1>
      ) : total === completed ? (
        <h1 className="ContadorDeVictorias">
          Ha completado <span>todas</span> sus tareas! <span>Felicidades</span> 🎖️
        </h1>
      ) : (
        <h1 className="ContadorDeVictorias">
          Ha completado <span>{completed}</span> de <span>{total}</span> tareas diarias
        </h1>
      )}
    </div>
  );
}

export {ToDoCounter}  