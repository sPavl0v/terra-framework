import PropTypes from 'prop-types';

const columnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,
  /**
   * A number (in px) specifying the width of the column. If not provided, the Table's default column width will be used.
   */
  width: PropTypes.number,
});

export default columnShape;