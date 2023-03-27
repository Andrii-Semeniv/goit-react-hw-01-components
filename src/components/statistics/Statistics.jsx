import propTypes from 'prop-types';

import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 class="title">{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
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
