import { useGeneratedCards } from '../../hooks/useGeneratedCards';
import { FloatingCard } from './FloatingCard';

export const BackFloatingCard = () => {
    const cards = useGeneratedCards();

    const backCards = cards.filter(
        (card) => card.layer === "back"
    );

    return (
        <div className="absolute inset-0 pointer-events-none">
            {backCards.map((card) => (
                <FloatingCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
};
