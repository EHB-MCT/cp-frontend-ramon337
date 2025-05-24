import { useEffect, useState } from "react";

export default function useFairytales() {
  const [fairytales, setFairytales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
      .then((res) => {
        if (!res.ok) throw new Error("Data ophalen mislukt");
        return res.json();
      })
      .then((data) => {
        data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setFairytales(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { fairytales, loading, error };
}
