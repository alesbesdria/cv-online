import { useEffect, useState } from "react";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function VisitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisits = async () => {
      try {
        const visitRef = doc(db, "stats", "visits");
        const alreadyCounted = sessionStorage.getItem("counted");

        if (!alreadyCounted) {
          sessionStorage.setItem("counted", "true");

          const snap = await getDoc(visitRef);

          if (snap.exists()) {
            await updateDoc(visitRef, { count: increment(1) });
          } else {
            await setDoc(visitRef, { count: 1 });
          }
        }

        const finalSnap = await getDoc(visitRef);
        if (finalSnap.exists()) {
          setCount(finalSnap.data().count ?? 0);
        }
      } catch (error) {
        console.error("Erreur compteur global :", error);
      }
    };

    updateVisits();
  }, []);

  return <div className="visit">{count}</div>;
}

export default VisitCounter;