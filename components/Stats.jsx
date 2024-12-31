"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const statsTemplate = [
  { num: 1, text: "Years of experience" },
  { num: 0, text: "Projects completed" },
  { num: 6, text: "Technologies mastered" },
  { num: 0, text: "Code commits" },
];

const Stats = () => {
  const [stats, setStats] = useState(statsTemplate);

  useEffect(() => {
    const fetchStats = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      const username = "itz-Hiru";
      let totalCommits = 0;
      let totalRepos = 0;

      try {
        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        if (!repoResponse.ok) {
          console.error(
            "Failed to fetch repositories:",
            repoResponse.statusText
          );
          return;
        }

        const repos = await repoResponse.json();
        totalRepos = repos.length;

        for (const repo of repos) {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/stats/contributors`,
              {
                headers: {
                  Authorization: `token ${token}`,
                },
              }
            );

            if (!commitsResponse.ok) {
              continue;
            }

            const commitStats = await commitsResponse.json();

            if (Array.isArray(commitStats)) {
              const userStats = commitStats.find(
                (contributor) =>
                  contributor.author && contributor.author.login === username
              );
              if (userStats) {
                totalCommits += userStats.total;
              }
            }
          } catch (error) {
            console.error("Error fetching commits:", error);
          }
        }

        setStats((prevStats) =>
          prevStats.map((stat) =>
            stat.text === "Code commits"
              ? { ...stat, num: totalCommits }
              : stat.text === "Projects completed"
              ? { ...stat, num: totalRepos }
              : stat
          )
        );
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto mt-8 xl:mt-0 mb-5">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => (
          <div
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key={index}
          >
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="text-white/90 text-4xl xl:text-6xl font-extrabold hover:text-accent transition-colors"
            />
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
