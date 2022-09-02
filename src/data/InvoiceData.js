import React from 'react';
import { MdOutlineSupervisorAccount, MdLanguage, MdOutlineAttachMoney } from 'react-icons/md';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { FiActivity, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';

  
  const InvoiceData = () => {
    const earningData = [
        {
 
          icon: <MdOutlineAttachMoney />,
          amount: '39,354',
          percentage: '',
          title: 'Invoices last 90 Days',
          iconColor: '#03C9D7',
          iconBg: '#E5FAFB',
          pcColor: 'red-600',
        },
        {
          icon: <BsBoxSeam />,
          amount: '4,396',
          percentage: '',
          title: 'Payments last 90 Days',
          iconColor: 'rgb(255, 244, 229)',
          iconBg: 'rgb(254, 201, 15)',
          pcColor: 'green-600',
         
        },
        {
          icon: <FiBarChart />,
          amount: '423,39',
          percentage: '',
          title: 'Invoices last 60 Days',
          iconColor: 'rgb(228, 106, 118)',
          iconBg: 'rgb(255, 244, 229)',
          pcColor: 'green-600',
          
        },
        {
          icon: <HiOutlineRefresh />,
          amount: '39,354',
          percentage: '',
          title: 'Payments 60 Days',
          iconColor: 'rgb(0, 194, 146)',
          iconBg: 'rgb(235, 250, 242)',
          pcColor: 'red-600',
          
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
    )
  }
  
  export default InvoiceData