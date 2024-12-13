import { useState } from "react";

interface SimpsonTypes {
  simpson: {
    firstname: string;
    lastname: string;
    picture: string;
    city: string;
    age: number;
  };
  sayHello: (name: string) => string;
}





export default function SimpsonCard({ simpson, sayHello }: SimpsonTypes) {
  const [donuts, setDonuts] = useState (0);
  
  return (
    <div className="card">
      <p>{sayHello(simpson.firstname)}</p>
      <h1>
        {simpson.firstname} {simpson.lastname}
      </h1>
      <img src={simpson.picture} alt={simpson.firstname} />
      <p>Age: {simpson.age}</p>
      <p>Ville : {simpson.city}</p>
      <button type="button" onClick={() => setDonuts(donuts +1)}><img src="./public/Donuts.png" alt="Photo d'un donuts" />{donuts}</button>
    </div>

  );

}
