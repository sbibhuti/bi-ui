import { useGeneratedCards } from '../../hooks/useGeneratedCards';
import FloatingCard from './FloatingCard';

const FrontFloatingCard = () => {
    const cards = useGeneratedCards();

    const frontCards = cards.filter(
        (card) => card.layer === "front"
    );

    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {frontCards.map((card) => (
                <FloatingCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
}

export default FrontFloatingCard;