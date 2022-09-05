import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MdOutlineSupervisorAccount,
  MdLanguage,
  MdOutlineAttachMoney,
} from "react-icons/md";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import {
  FiActivity,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";

const InvoiceData = () => {
  const [powerProject, setPowerProject] = useState([]);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        "http://192.168.1.10/hrms/public/api/dashboardData"
      );
      setPowerProject(await resp.data);
      console.log (powerProject);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
    
  }, []);
 
  const earningData = [
    {
      icon: "Invoices",
      amount: powerProject.invoice_90_days,
      percentage: "",
      title: "last 90 Days",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: "Payments",
      amount: powerProject.received_90_days,
      percentage: "",
      title: "Last 90 Days",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
    {
      icon: "Invoices",
      amount:  powerProject.invoice_60_days,
      percentage: "",
      title: "last 60 Days",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: "Payments",
      amount: powerProject.received_60_days,
      percentage: "",
      title: "Last 60 Days",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
  ];
  return (
    <>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
                fontSize: item.size,
              }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-black-400  mt-1 font-bold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InvoiceData;
