import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar()  {

  const { currentExperience, experinceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experinceToNextLevel);
  console.log(percentToNextLevel);

  return (
    <header className={styles.experinceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          { currentExperience } xp
        </span>
      </div>
      <span>0 xp</span>
    </header>
  );
}