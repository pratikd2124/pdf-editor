/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Chart from 'react-apexcharts';


const RecentTransactions = () => {
    const transactions = [
      { id: 1, date: '2024-05-01', description: 'Subscription Payment', amount: '$29.99', status: 'Completed' },
      { id: 2, date: '2024-05-02', description: 'Shopify Purchase', amount: '$150.00', status: 'Pending' },
      { id: 3, date: '2024-05-03', description: 'Refund', amount: '$45.00', status: 'Completed' },
      { id: 4, date: '2024-05-04', description: 'System Maintenance', amount: '$75.00', status: 'Failed' },
      { id: 5, date: '2024-05-05', description: 'Support Ticket', amount: '$60.00', status: 'Completed' },
      { id: 6, date: '2024-05-06', description: 'Guide Purchase', amount: '$25.00', status: 'Completed' },
      { id: 7, date: '2024-05-07', description: 'Subscription Renewal', amount: '$29.99', status: 'Pending' },
      { id: 8, date: '2024-05-08', description: 'Shopify Sale', amount: '$200.00', status: 'Completed' },
      { id: 9, date: '2024-05-09', description: 'Help Service', amount: '$35.00', status: 'Failed' },
      { id: 10, date: '2024-05-10', description: 'System Upgrade', amount: '$100.00', status: 'Completed' },
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 5;
  
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
            <div className="h-80">
            <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px' }}>
                <div className="recharts-wrapper" style={{ position: 'relative', cursor: 'default', width: '436px', height: '320px' }}>
                <svg className="recharts-surface" width="436" height="320" viewBox="0 0 436 320" style={{ width: '100%', height: '100%' }}>
                    <title></title>
                    <desc></desc>
                    <defs>
                    <clipPath id="recharts1-clip">
                        <rect x="65" y="5" height="280" width="366"></rect>
                    </clipPath>
                    </defs>
                    <g className="recharts-cartesian-grid">
                    <g className="recharts-cartesian-grid-horizontal">
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="285" x2="431" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="215" x2="431" y2="215"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="145" x2="431" y2="145"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="75" x2="431" y2="75"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="5" x2="431" y2="5"></line>
                    </g>
                    <g className="recharts-cartesian-grid-vertical">
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="91.14285714285714" y1="5" x2="91.14285714285714" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="143.42857142857142" y1="5" x2="143.42857142857142" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="195.7142857142857" y1="5" x2="195.7142857142857" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="248" y1="5" x2="248" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="300.2857142857143" y1="5" x2="300.2857142857143" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="352.5714285714286" y1="5" x2="352.5714285714286" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="404.8571428571429" y1="5" x2="404.8571428571429" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="65" y1="5" x2="65" y2="285"></line>
                        <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="65" y="5" width="366" height="280" x1="431" y1="5" x2="431" y2="285"></line>
                    </g>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="285" x2="431" y2="285"></line>
                    <g className="recharts-cartesian-axis-ticks">
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="91.14285714285714" y1="291" x2="91.14285714285714" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="91.14285714285714" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="91.14285714285714" dy="0.71em">Mon</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="143.42857142857142" y1="291" x2="143.42857142857142" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="143.42857142857142" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="143.42857142857142" dy="0.71em">Tue</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="195.7142857142857" y1="291" x2="195.7142857142857" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="195.7142857142857" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="195.7142857142857" dy="0.71em">Wed</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="248" y1="291" x2="248" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="248" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="248" dy="0.71em">Thu</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="300.2857142857143" y1="291" x2="300.2857142857143" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="300.2857142857143" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="300.2857142857143" dy="0.71em">Fri</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="352.5714285714286" y1="291" x2="352.5714285714286" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="352.5714285714286" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="352.5714285714286" dy="0.71em">Sat</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="bottom" width="366" height="30" x="65" y="285" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="404.8571428571429" y1="291" x2="404.8571428571429" y2="285"></line>
                        <text orientation="bottom" width="366" height="30" stroke="none" x="404.8571428571429" y="293" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                            <tspan x="404.8571428571429" dy="0.71em">Sun</tspan>
                        </text>
                        </g>
                    </g>
                    </g>
                    <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="65" y1="5" x2="65" y2="285"></line>
                    <g className="recharts-cartesian-axis-ticks">
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="285" x2="65" y2="285"></line>
                        <text orientation="left" width="60" height="280" stroke="none" x="57" y="285" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                            <tspan x="57" dy="0.355em">0</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="215" x2="65" y2="215"></line>
                        <text orientation="left" width="60" height="280" stroke="none" x="57" y="215" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                            <tspan x="57" dy="0.355em">1000</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="145" x2="65" y2="145"></line>
                        <text orientation="left" width="60" height="280" stroke="none" x="57" y="145" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                            <tspan x="57" dy="0.355em">2000</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="75" x2="65" y2="75"></line>
                        <text orientation="left" width="60" height="280" stroke="none" x="57" y="75" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                            <tspan x="57" dy="0.355em">3000</tspan>
                        </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line orientation="left" width="60" height="280" x="5" y="5" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="59" y1="5" x2="65" y2="5"></line>
                        <text orientation="left" width="60" height="280" stroke="none" x="57" y="12" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                            <tspan x="57" dy="0.355em">4000</tspan>
                        </text>
                        </g>
                    </g>
                    </g>
                    <g className="recharts-layer recharts-bar">
                    <g className="recharts-layer recharts-bar-rectangles">
                        <g className="recharts-layer">
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="70.22857142857143" y="5" width="41" height="280" radius="0" fill="#3B82F6" name="Mon" className="recharts-rectangle" d="M 70.22857142857143,5 h 41 v 280 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="122.5142857142857" y="75" width="41" height="210" radius="0" fill="#3B82F6" name="Tue" className="recharts-rectangle" d="M 122.5142857142857,75 h 41 v 210 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="174.79999999999998" y="145" width="41" height="140" radius="0" fill="#3B82F6" name="Wed" className="recharts-rectangle" d="M 174.79999999999998,145 h 41 v 140 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="227.0857142857143" y="90.4" width="41" height="194.6" radius="0" fill="#3B82F6" name="Thu" className="recharts-rectangle" d="M 227.0857142857143,90.4 h 41 v 194.6 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="279.37142857142857" y="152.70000000000005" width="41" height="132.29999999999995" radius="0" fill="#3B82F6" name="Fri" className="recharts-rectangle" d="M 279.37142857142857,152.70000000000005 h 41 v 132.29999999999995 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="331.6571428571429" y="117.69999999999999" width="41" height="167.3" radius="0" fill="#3B82F6" name="Sat" className="recharts-rectangle" d="M 331.6571428571429,117.69999999999999 h 41 v 167.3 h -41 Z"></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path x="383.9428571428572" y="40.69999999999999" width="41" height="244.3" radius="0" fill="#3B82F6" name="Sun" className="recharts-rectangle" d="M 383.9428571428572,40.69999999999999 h 41 v 244.3 h -41 Z"></path>
                        </g>
                        </g>
                    </g>
                    <g className="recharts-layer"></g>
                    </g>
                </svg>
                <div tabIndex="-1" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style={{ visibility: 'hidden', pointerEvents: 'none', position: 'absolute', top: '0px', left: '0px', transform: 'translate(132.357px, 10px)' }}>
                    <div className="recharts-default-tooltip" style={{ margin: '0px', padding: '10px', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(204, 204, 204)', whiteSpace: 'nowrap' }}>
                    <p className="recharts-tooltip-label" style={{ margin: '0px' }}>Mon</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-gray-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">New sale completed</p>
                    <p className="text-sm text-gray-500">Customer #1234 - $123.45</p>
                </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-gray-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">New sale completed</p>
                    <p className="text-sm text-gray-500">Customer #1234 - $123.45</p>
                </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-gray-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">New sale completed</p>
                    <p className="text-sm text-gray-500">Customer #1234 - $123.45</p>
                </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-gray-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">New sale completed</p>
                    <p className="text-sm text-gray-500">Customer #1234 - $123.45</p>
                </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-gray-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">New sale completed</p>
                    <p className="text-sm text-gray-500">Customer #1234 - $123.45</p>
                </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            </div>
        </div>
        </div>
    );
};
  

const RevenueDonutChart = () => {
};



const Stats = () => {
    return (
        <>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Total Sales</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">$12,345</p>
                    </div>
                    <div className="p-3 rounded-full bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dollar-sign w-6 h-6 text-green-600">
                        <line x1="12" x2="12" y1="2" y2="22"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="ml-2 text-sm text-green-600">+12.5%</span><span className="ml-2 text-sm text-gray-500">vs last period</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Active Customers</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">1,234</p>
                    </div>
                    <div className="p-3 rounded-full bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-6 h-6 text-blue-600">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="ml-2 text-sm text-green-600">+3.2%</span><span className="ml-2 text-sm text-gray-500">vs last period</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Low Stock Items</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">23</p>
                    </div>
                    <div className="p-3 rounded-full bg-red-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-alert-triangle w-6 h-6 text-red-600">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="ml-2 text-sm text-green-600">-5</span><span className="ml-2 text-sm text-gray-500">vs last period</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Total Products</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">456</p>
                    </div>
                    <div className="p-3 rounded-full bg-purple-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package w-6 h-6 text-purple-600">
                        <path d="m7.5 4.27 9 5.15"></path>
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                        <path d="m3.3 7 8.7 5 8.7-5"></path>
                        <path d="M12 22V12"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-500">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="ml-2 text-sm text-green-600">+8</span><span className="ml-2 text-sm text-gray-500">vs last period</span>
                </div>
            </div>
        </div>
        </>
    )
}


const AnalyticsGraph = () => {
};
const AnalyticsChart = () => {
  return (
      <>
      <Stats/>
        <div className='grid lg:grid-cols-3 grid-cols-1 items-center'>
            <div className='col-span-2'>
            <AnalyticsGraph/>

            </div>
            <div className='cols-span-1'>
            <RevenueDonutChart/>
            </div>

        </div>
        <RecentTransactions/>
      </>
  )
}

export default AnalyticsChart