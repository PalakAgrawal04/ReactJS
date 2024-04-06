import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

// import "./Table.css";

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <>
      <style>
        {`
                .table th {
                  padding: 0.8rem;
                }
                `}
      </style>

      <div className="table-wrapper h-[50%]  w-[100%] rounded-[20px]  border-2 border-solid flex justify-center items-center ">
        <table className="table h-full overflow-hidden table-auto  rounded-[20px] border-gray-400 border-2 border-solid whitespace-nowrap w-[100%] max-w-[100%]">
          <thead className="bg-gray-200 text-gray-900">
            <tr className="p-3 ">
              <th>Page</th>
              <th className="expand w-[100%]">Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <>
                  <style>
                    {`
                .table td {
                  padding: 0.8rem;
                  border-top: 0.5px solid #ddd;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                `}
                  </style>
                  <tr key={idx} className="p-3 hover:bg-[#eee]">
                    <td>{row.page}</td>
                    <td className="expand w-[100%]">{row.description}</td>
                    <td>
                      <span className={`label   label-${row.status}`}>

                        {(row.status === "draft") ? <div className=".label-draft bg-[#777] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}
                        {(row.status === "live") ? <div className=".label-live bg-[#42a942] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}
                        {(row.status === "error") ? <div className=".label-error bg-[#d9534f] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}

                      </span>
                    </td>
                    <td className="fit">
                      <span className="actions  flex justify-around">
                        <BsFillTrashFill
                          className="delete-btn cursor-pointer text-red-500"
                          onClick={() => deleteRow(idx)}
                        />
                        <BsFillPencilFill
                          className="edit-btn cursor-pointer "
                          onClick={() => editRow(idx)}
                        />
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;