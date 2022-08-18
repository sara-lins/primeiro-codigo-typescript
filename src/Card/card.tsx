interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <li>
      <p>{name}</p>
      <p>{age}</p>
      <p>{hobby}</p>
    </li>
  );
};
