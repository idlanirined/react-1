import { createMuiTheme, MuiThemeProvider, Typography, withStyles, Tooltip, TableCell, Snackbar, Switch } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useEffect, useReducer, useState } from "react";

const ct = require("./library/CustomTable");
const getMuiTheme = () => createMuiTheme(ct.customTable());

const options = ct.customOptions()

export default function Table(props) {
    const data = [
        [ "Joe James", "Test Corp", "Yonkers", "NY" ],
        [ "John Walsh", "Test Corp", "Hartford", "CT" ],
        [ "Bob Herm", "Test Corp", "Tampa", "FL" ],
        [ "James Houston", "Test Corp", "Dallas", "TX" ],
    ];

    const columns = [
        {
            name: "Name",
            options: {
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ textAlign: 'left' }}>
                            {val}
                        </div>
                    )
                }
            }
        },
        {
            name: "Company",
            options: {
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', maxWidth: 350, textAlign: 'left' }}>
                            {val}
                        </div>
                    )
                }
            }
        },
        {
            name: "City",
            label: "City"
        },
        {
            name: "State",
            label: "State",
        }
    ];


    return (
        <div style={{ paddingTop: 10, position: 'relative' }}>
            <div >
                <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </div>
        </div>
    )
}