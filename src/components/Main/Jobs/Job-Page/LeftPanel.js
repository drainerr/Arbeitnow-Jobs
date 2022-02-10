import styles from './JobPage.module.css';
import Button from '../../../UI/Button';
import { CgArrowLongLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const LeftPanel = () => {
  return (
    <div className={styles.LeftPanel}>
      <Link to="/" className={styles.GoBack}>
        <CgArrowLongLeft />
        <span>Back to search</span>
      </Link>
      <h5>How to apply</h5>
      <p>
        Please click the button below to see the original job post and apply
      </p>
      <Button className={styles.ApplyButton}>
        <a
          href="https://www.arbeitnow.com/view/assistante-administratifve-polyvalente-site-de-villepinte-hf-auto1-group-212438"
          target="_blank"
        >
          Apply
        </a>
      </Button>
    </div>
  );
};

export default LeftPanel;
