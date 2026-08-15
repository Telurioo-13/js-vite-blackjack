import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {} carta 
 * @param {*} turno 
 * @param {*} puntosHTML 
 * @param {*} puntosJugadores 
 * @returns 
 */    

    // Turno: 0 = primer jugador y el último será la computadora
    export const acumularPuntos = ( carta, turno, puntosHTML ,puntosJugadores = []) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }