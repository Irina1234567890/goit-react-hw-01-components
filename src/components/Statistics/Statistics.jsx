import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StatisticsTitle, StatList } from './Statistics.styled';
import { randomHexColor} from 'components/randomHexColor';


export const Statistics = ({title, stats}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5} border="deepGrey">
      
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Box
            key={id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg={randomHexColor()}
            p={3}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </Box>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};