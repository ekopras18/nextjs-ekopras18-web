import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GitHubContributions (){
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Authorization: 'Bearer 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',
          },
          params: {
            visibility: 'public',
            affiliation: 'owner',
          },
        });

        // Hitung jumlah kontribusi dari semua repository yang Anda miliki
        let totalContributions = 0;
        response.data.forEach((repo: { stargazers_count: number; }) => {
          totalContributions += repo.stargazers_count;
        });

        // setContributions(totalContributions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div>
      <h2>GitHub Contributions</h2>
      <p>{contributions} contributions in the last year</p>
    </div>
  );
};
