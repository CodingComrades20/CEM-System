import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';



export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: "Oraganization",
    path: "/",
    icon:<AiIcons.AiOutlineTeam />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: "Employee",
    path: "/",
    icon: <RiIcons.RiTeamLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  
    subNav: [
      {
        title: 'Add Employee',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Employee List',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Departments",
    path: "/",
    icon: <FcIcons.FcDepartment />,

    subNav: [
      {
        title: 'Reports',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Customers",
    path: "/customerlist",
    icon: <RiIcons.RiTeamLine />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Customer',
        path: '/addcustomer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Customer List',
        path: '/customerlist',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Suppliers",
    path: "/supplierlist",
    icon: <FaIcons.FaShuttleVan />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add supplier',
        path: '/addsupplier',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Supplier List',
        path: '/supplierlist',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiOutlineShoppingCart />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Product List',
        path: '/productList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Product',
        path: '/addProduct',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Category List',
        path: '/categoryList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Category',
        path: '/addCategory',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: "Sales Orders",
    path: "/",
    icon: <FaIcons.FaCreditCard/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Add Sale',
        path: '/addsale',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sale List',
        path: '/salelist',
        icon: <IoIcons.IoIosPaper />
      }
    ]
    
  },
  {
    title: "Purchase Orders",
    path: "/",
    icon: <FaIcons.FaCreditCard/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      
      {
        title: 'Add Purchase',
        path: '/addpurchase',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Purchase List',
        path: '/purchaselist',
        icon: <IoIcons.IoIosPaper />
      }
    ]
    
  },
  {
    title: "Payments",
    path: "/payment",
    icon: <FaIcons.FaCreditCard/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Payment List',
        path: '/paymentList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Payment',
        path: '/addPayment',
        icon: <IoIcons.IoIosPaper />
      },
    ]
    
  },
  {
    title: "Leave",
    path: "/leave",
    icon: <FcIcons.FcLeave/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <FcIcons.FcFeedback/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: "Report",
    path: "/report",
    icon: <FaIcons.FaReceipt/>, 

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
];
