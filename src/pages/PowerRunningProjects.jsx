import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

const projectHeading = [
  {
    field: "projectName",
    headerText: "Project Name",
    width: "450",
    editType: "dropdownedit",
    textAlign: "Left",
  },
  {
    field: "paymentReceived",
    headerText: "Payment Received",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Left",
  },
  {
    field: "pendingPayment",
    headerText: "Pending Payment",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Left",
  },
  {
    field: "budgetUtilization",
    headerText: "Budget Utilize",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Left",
  },
  {
    field: "projectProgress",
    headerText: "Overall Progress",
    width: "100",
    editType: "dropdownedit",
    textAlign: "Left",
  },
];

const projectData = [
  {
    projectName:
      "500/220/132 KV Lahore North Substation & Extension Works at 500/220/132 KV Nokhar Substation 500/220/132 KV Lahore North Substation & Extension Works at 500/220/132 KV Nokhar Substation 500/220/132 KV Lahore North Substation & Extension Works at 500/220/132 KV Nokhar Substation",
    paymentReceived: "20,000,000",
    pendingPayment: "10,000,000",
    budgetUtilization: "30%",
    projectProgress: "20%",
  },
  {
    projectName: "SCADA Phase-III",
    paymentReceived: "20,000,000",
    pendingPayment: "10,000,000",
    budgetUtilization: "30%",
    projectProgress: "20%",
  },
  {
    projectName: "SCADA Phase-III",
    paymentReceived: "20,000,000",
    pendingPayment: "10,000,000",
    budgetUtilization: "30%",
    projectProgress: "20%",
  },
  {
    projectName: "SCADA Phase-III",
    paymentReceived: "20,000,000",
    pendingPayment: "10,000,000",
    budgetUtilization: "30%",
    projectProgress: "20%",
  },
];

const PowerRunningProjects = () => {
  const editing = { allowDeleting: false, allowEditing: false };
  const [projectData, setProjectData] = useState([]);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        "http://192.168.1.10/hrms/public/api/projectData"
      );
      setProjectData(await resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <GridComponent
        id="gridcomp"
        dataSource={projectData}
        allowSorting
        allowPaging
        allowTextWrap
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {projectHeading.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default PowerRunningProjects;
