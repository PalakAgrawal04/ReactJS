import { useState } from "react";

// import { Table } from "./components/Table";
import { Modal } from "./Modal";

// import Dashboard from "./Dashboard";
import Table from "./Table";

function Tablet() {

  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page of the website",
      status: "live",
    },
    {
      page: "About Us",
      description: "This page has details about the company",
      status: "draft",
    },
    {
      page: "Pricing",
      description: "Prices for different subscriptions",
      status: "error",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


  return (
    <div className="tablet h-full w-full bg-gray-500">
      <div className="tableList h-[100%] w-[100%] flex flex-col justify-center items-center gap-[10px] bg-white  ">
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <button onClick={() => setModalOpen(true)} className="btn px-[20px] py-[10px] bg-blue-500 text-white">
          Add
        </button>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default Tablet;
