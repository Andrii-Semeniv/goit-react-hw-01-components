import propTypes from 'prop-types';

import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};
