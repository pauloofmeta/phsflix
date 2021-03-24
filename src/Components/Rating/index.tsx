import { useState } from "react";

interface StarData {
  active: boolean;
}

export interface RatingProps {
  count?: number;
  value?: number;
}

export function Rating({
  count = 5
}: RatingProps) {

  const [stars, setStars] = useState<StarData[]>(getStars());

  function getStars(index: number = 0) {
    let stars: StarData[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({ active: i === index })
    }

    return stars;
  }

  function handleStarts(index: number) {
    setStars(getStars(index))
  }

  return (
    <div>
      { stars.map((_, i) =>
        <span key={i} onClick={() => handleStarts(i)} >★</span>
      ) }
    </div>
  );
}