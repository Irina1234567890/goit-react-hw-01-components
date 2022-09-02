import PropTypes from 'prop-types';
import {TransactionTable, DataHeader, TransactionsBody,TransactionRow} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
    <table className="transaction-history">
        <thead>
            <tr>
            <DataHeader>Type</DataHeader>
            <DataHeader>Amount</DataHeader>
            <DataHeader>Currency</DataHeader>
            </tr>
        </thead>

        <TransactionsBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionTable>{type}</TransactionTable>
            <TransactionTable>{amount}</TransactionTable>
            <TransactionTable>{currency}</TransactionTable>
          </TransactionRow>
        ))}
        </TransactionsBody>
      </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })).isRequired,
}