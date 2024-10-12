import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, update } from "../actions/user";
import { Pagination } from "antd";

const requestData = {
  0: 0,
  49: 10000,
  79: 20000,
  149: 40000,
};

function Admin() {
  const dispatch = useDispatch();

  const { users, total } = useSelector((store) => store.users);
  const [nRows, setNRows] = useState(10);
  const [index,setIndex] =useState(0);

  const nPage = Math.floor(total / nRows) + 1;
  const pageArray = Array.from({ length: nPage }, (_, i) => i + 1);

  useEffect(() => {
    dispatch(getUsers(index, nRows));
  }, [index,nRows]);

  const onDelete = (item) => {
    dispatch(update({ ...item, state: 0 }));
  };

  const onUndo = (item) => {
    dispatch(update({ ...item, state: 1 }));
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 text-black flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold mt-4">Users</h1>
      <div className="w-full overflow-x-auto px-16 py-5">
        <table className="overflow-x-auto w-full text-xs">
          <thead className="h-16 bg-white">
            <tr className=" m-8 shadow-md rounded-lg">
              <th>User</th>
              <th>Number of Requests/Total Requests Left</th>
              <th>Subscription Plan</th>
              <th>Delete User</th>
              <th>Undo Delete User</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users &&
              users.length &&
              users.map((item) => (
                <tr className="h-14 m-44 shadow-md rounded-lg">
                  <td>{item.email}</td>
                  <td>
                    {requestData[item.subscription]}/
                    {requestData[item.subscription]}
                  </td>
                  <td>
                    {item.subscription == 0
                      ? "No Plan"
                      : `$${item.subscription} Plan`}
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(item)}
                      disabled={!item.state}
                      className={
                        item.state
                          ? "focus:outline-none text-white bg-red-600 hover:bg-red-700 rounded-md px-5 py-1.5 me-2"
                          : "focus:outline-none text-white bg-gray-600 rounded-md px-5 py-1.5 me-2"
                      }
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => onUndo(item)}
                      disabled={item.state}
                      className={
                        !item.state
                          ? "focus:outline-none text-white bg-blue-600 hover:bg-blue-700 rounded-md px-5 py-1.5 me-2"
                          : "focus:outline-none text-white bg-gray-600 rounded-md px-5 py-1.5 me-2"
                      }
                    >
                      Undo
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        current={index+1}
        onChange={(page,pageSize) => {setIndex(page-1);console.log(page);
        }}
        total={total}
      />
    </div>
  );
}

export default Admin;
