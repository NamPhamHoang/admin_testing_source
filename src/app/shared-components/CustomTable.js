import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import "../../assets/styles/action.css";
const { SearchBar, ClearSearchButton } = Search;

const CustomTable = ({ data, columns, defaultSorted }) => {
  const pagination = {
    page: 1,
    sizePerPage: 3,
    sizePerPageList: [3, 4, 5, 6],
    alwaysShowAllBtns: true,
    withFirstAndLast: false,
    nextPageText: "Next",
    prePageText: "Previous",
    custom: true,
  };

  return (
    <ToolkitProvider
      bootstrap4
      keyField="id"
      search
      data={data}
      columns={columns}
    >
      {(props) => (
        <>
          <PaginationProvider pagination={paginationFactory(pagination)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <div className="d-flex justify-content-between">
                  <span>
                    Show{" "}
                    <SizePerPageDropdownStandalone
                      className="custom_size_perpage"
                      {...paginationProps}
                    />{" "}
                    entries
                  </span>

                  <SearchBar {...props.searchProps} />
                </div>

                <div className="table-responsive">
                  <BootstrapTable
                    bootstrap4
                    striped
                    key="1"
                    keyField="id"
                    defaultSorted={defaultSorted}
                    {...paginationTableProps}
                    {...props.baseProps}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <PaginationTotalStandalone {...paginationProps} />
                  <PaginationListStandalone
                    alwaysShowAllBtn={true}
                    withFirstAndLast={false}
                    {...paginationProps}
                  />
                </div>
              </div>
            )}
          </PaginationProvider>
        </>
      )}
    </ToolkitProvider>
  );
};

export default CustomTable;
