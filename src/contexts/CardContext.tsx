import { createContext, ReactNode, useContext, useState } from "react";

interface CardContextData {
  cardTitle: string;
  cardDescription?: string;
  cardImage?: string;
  getCard?: ({ title, description, image }: GetCardProps) => void;
}

interface GetCardProps {
  title: string;
  image: string;
  description: string;
}

interface CardContextProviderProps {
  children: ReactNode;
}

export const CardContext = createContext({} as CardContextData);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardTitle, setCardTitle] = useState("Acústico");
  const [cardDescription, setCardDescription] = useState("");
  const [cardImage, setCardImage] = useState("/product2.jpg");

  function getCard({ title, description, image }: GetCardProps) {
    setCardTitle(title);
    setCardDescription(description);
    setCardImage(image);
  }

  return (
    <CardContext.Provider
      value={{
        cardTitle,
        cardImage,
        cardDescription,
        getCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  return useContext(CardContext);
};
