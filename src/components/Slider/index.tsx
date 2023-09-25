import React from "react";
import styled from "styled-components";
import Card from "../Card"; // Assurez-vous d'importer votre composant CardDefault

// Styles pour le conteneur du slider
const SliderContainer = styled.div`
position: relative;
  display: flex;
  align-items: flex-start;
  gap: 17px;
  overflow-x: auto; /* Activer le défilement horizontal en cas de dépassement */
  white-space: nowrap; /* Empêche le retour à la ligne des éléments enfants */
  width: 100%; /* Ajuster la largeur du conteneur du slider selon les besoins */
  z-index: 1;
`;

const SlideItem = styled.div`
  /* Définissez la largeur fixe que vous souhaitez pour chaque enfant */
  width: 300px; /* Ajustez selon vos besoins */
`;

interface SliderProps {
  children: React.ReactNode; // Utilisez React.ReactNode pour accepter des éléments React en tant qu'enfants
}

export const Slider = ({ children }: SliderProps) => {
  return (
    <SliderContainer>
      {React.Children.map(children, (child, index) => (
        <SlideItem key={index}>{child}</SlideItem>
      ))}
    </SliderContainer>
  );
};
