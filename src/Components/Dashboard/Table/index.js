import React from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { Select, Option, Button } from "@material-tailwind/react";

import {
  CheckIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <div className="relative flex items-center mt-4 md:mt-0">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mx-3 text-gray-400">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder={`${count} records...`}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </label>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline rounded-md">
      <span className="relative flex items-center mt-4 md:mt-0">
        {render("Header")}:{" "}
      </span>
      <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg      rtl:flex-row-reverse">
        <button
          onClick={() => {
            setFilter("");
          }}
          className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm  ">
          View all
        </button>
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => {
              setFilter(option);
            }}
            className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm   hover:bg-gray-100">
            {option}
          </button>
        ))}
      </div>
    </label>
  );
}
function statusClass(value) {
  const statusColor = {
    success: "bg-green-50 text-green-600 dark:text-green-400",
    danger: "bg-red-50 text-red-600 dark:text-red-400",
    warning: "bg-yellow-50 text-yellow-600 dark:text-yellow-400",
    info: "bg-blue-50 text-blue-600 dark:text-blue-400",
    dark: "bg-gray-50 text-gray-600 dark:text-gray-400",
  };
  const statusContent = {
    success: ["active", "complete", "on", "done", "save"],
    danger: ["error"],
    warning: ["inactive", "incomplete", "unsaved"],
    info: ["info"],
    dark: ["dark"],
  };
  value = value.trim();

  for (const status in statusContent) {
    if (statusContent[status].includes(value)) {
      return statusColor[status];
    }
  }

  return statusColor.dark;
}
export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={`px-3 py-1 uppercase leading-wide font-medium text-xs rounded-full shadow-sm inline px-3 py-1 text-sm 
        ${statusClass(status)}`}>
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="font-medium text-gray-800 ">{value}</div>
        <div className="text-sm text-gray-500">
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}

function TableBuild({ title, Menu, columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );
  // Render the UI for your table
  return (
    <div className="min-h-screen text-gray-900 ">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-lg font-medium mb-6">{title}</h1>
        </div>
        {Menu && (
          <div className="flex items-center gap-4 mb-4 ">
            {Menu.map(({ title, icon, variant, click }, index) => (
              <Button
                key={index}
                onClick={click}
                className="flex items-center gap-3"
                variant={variant}>
                {React.createElement(icon, {
                  className: "h-5 w-5",
                  strokeWidth: 2,
                })}
                {title}
              </Button>
            ))}
          </div>
        )}
        <div className="mt-6">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column) =>
                column.Filter ? (
                  <div className="mt-2 sm:mt-0" key={column.id}>
                    {column.render("Filter")}
                  </div>
                ) : null
              )
            )}
          </div>
          {/* table */}
          <div className="mt-4 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-200">
                    <thead className="text-xs uppercase bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}>
                              <div className="flex items-center gap-x-3 focus:outline-none">
                                {column.render("Header")}
                                {/* Add a sort direction indicator */}
                                <span>
                                  {column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <ChevronDownIcon className="w-4 h-4 text-gray-400 " />
                                    ) : (
                                      <ChevronUpIcon className="w-4 h-4 text-gray-400 " />
                                    )
                                  ) : (
                                    <CheckIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                  )}
                                </span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      {...getTableBodyProps()}
                      className="bg-white divide-y divide-gray-200      ">
                      {page.map((row, i) => {
                        // new
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="px-6 py-4 whitespace-nowrap "
                                  role="cell">
                                  {cell.column.Cell.name ===
                                  "defaultRenderer" ? (
                                    <div className="text-sm ">
                                      {cell.render("Cell")}
                                    </div>
                                  ) : (
                                    cell.render("Cell")
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="py-3 flex items-center justify-between">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-x-2 items-baseline">
                <span className="text-sm text-gray-700 ">
                  Page{" "}
                  <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
                  <span className="font-medium">{pageOptions.length}</span>
                </span>
                <label>
                  <div className="w-72">
                    <Select variant="outlined" label="Select PageSize">
                      {[5, 10, 20].map((pageSize) => (
                        <Option
                          key={pageSize}
                          onClick={() => setPageSize(Number(pageSize))}>
                          Show {pageSize}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </label>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination">
                  <Button
                    className="rounded-none rounded-l-lg relative inline-flex items-center px-2 py-2 bg-white   text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}>
                    <span className="sr-only">First</span>
                    <ChevronDoubleLeftIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    className="rounded-none relative inline-flex items-center px-2 py-2 bg-white   text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}>
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    className="rounded-none relative inline-flex items-center px-2 py-2 bg-white   text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}>
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button
                    className="rounded-none rounded-r-lg relative inline-flex items-center px-2 py-2 bg-white   text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}>
                    <span className="sr-only">Last</span>
                    <ChevronDoubleRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TableBuild;
