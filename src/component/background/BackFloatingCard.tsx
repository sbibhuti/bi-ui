import { useGeneratedCards } from '../../hooks/useGeneratedCards';
import FloatingCard from './FloatingCard';

const BackFloatingCard = () => {
    const cards = useGeneratedCards();

    const backCards = cards.filter(
        (card) => card.layer === "back"
    );

    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {backCards.map((card) => (
                <FloatingCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    )
}

export default BackFloatingCard;