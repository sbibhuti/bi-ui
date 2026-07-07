import { useGeneratedCards } from '../../hooks/useGeneratedCards';
import { FloatingCard } from './FloatingCard';

export const FrontFloatingCard = () => {
    const cards = useGeneratedCards();

    const frontCards = cards.filter(
        (card) => card.layer === "front"
    );

    return (
        <div className="absolute inset-0 pointer-events-none">
            {frontCards.map((card) => (
                <FloatingCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
}
