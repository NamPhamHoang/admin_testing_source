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
import "../../../assets/styles/action.css";
const { SearchBar, ClearSearchButton } = Search;

const CustomTable = ({expandRow, data, columns, defaultSorted}) => {
    const pagination = {
        page: 1,
        sizePerPage: 3,
        sizePerPageList: [3,4,5,6],
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
                        <PaginationProvider
                            pagination={paginationFactory(pagination)}
                        >
                            {
                                ({
                                    paginationProps,
                                    paginationTableProps
                                }) => (
                                    <div>
                                        <div className="d-flex flex-column flex-md-row flex-sm-column wrap justify-content-between">
                                            <span className="mt-2 mb-2">
                                                Show {" "}
                                                <SizePerPageDropdownStandalone
                                                    className="custom_size_perpage"
                                                    {...paginationProps}
                                                />
                                                {" "} entries
                                            </span>
                                            <span className = "mt-2 mb-2">
                                                <SearchBar 
                                                    {...props.searchProps} 
                                                />
                                            </span>
                                        </div>
                                        <div className="table-responsive">
                                            <BootstrapTable
                                                bootstrap4
                                                striped
                                                key="0"
                                                keyField="id"
                                                classes="dataTable table-bordered table-striped table-hover small display nowrap hide-sort dtr-inline"
                                                defaultSorted={defaultSorted}
                                                expandRow={ expandRow }
                                                rowClasses="custom-row-class"
                                                {...paginationTableProps}
                                                {...props.baseProps}
                                            />
                                        </div>
                                        <div className="d-flex flex-column flex-md-row flex-sm-column wrap justify-content-between align-items-center">
                                            <span className = "mt-2 mb-2">
                                                <PaginationTotalStandalone
                                                    {...paginationProps}
                                                />
                                            </span>
                                            <span className = "mt-2 mb-2">
                                                <PaginationListStandalone
                                                    alwaysShowAllBtn={true}
                                                    withFirstAndLast={false}
                                                    {...paginationProps}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                )
                            }
                        </PaginationProvider>
                    </>
                )}
            </ToolkitProvider>
    )
}

export default CustomTable;