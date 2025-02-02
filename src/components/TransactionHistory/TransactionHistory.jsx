import { table, table_head, row_style, capitalize, bg_gray } from "../TransactionHistory/TransactionHistory.module.css";
import clsx from "clsx";

function TransactionHistory({items}) {
  const typeColumnStyle = clsx(row_style, capitalize)

  return (
    <table className={table}>
      <thead className={table_head}>
        <tr>
          <th className={row_style}>Type</th>
          <th className={row_style}>Amount</th>
          <th className={row_style}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}, index) => {
          return (
            <tr className={index % 2 !== 0 && bg_gray} key={id}>
              <td className={typeColumnStyle}>{type}</td>
              <td className={row_style}>{amount}</td>
              <td className={row_style}>{currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TransactionHistory