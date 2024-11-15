import React from 'react';
import { useNavigate } from 'react-router-dom';

const PdfListPage = () => {
  const navigate = useNavigate();

  // Sample PDF data
  const pdfs = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Document ${i + 1}`,
    link: `https://example.com/document${i + 1}.pdf`,
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">PDF Management</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5v14"></path>
            </svg>
            Add PDF
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            placeholder="Search PDFs..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
          />
        </div>

        {/* PDF Table */}
        <div className="bg-white rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PDF Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PDF Link</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pdfs.map((pdf) => (
                  <tr key={pdf.id}>
                    <td className="px-6 py-4 text-gray-900 font-medium">{pdf.name}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">
                      <a
                        href={pdf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {pdf.link}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {/* Edit Button */}
                        <button className="p-1 text-gray-500 hover:text-blue-600" onClick={() => navigate(`/pdf-editor`)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                          </svg>
                        </button>
                        {/* Delete Button */}
                        <button className="p-1 text-gray-500 hover:text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfListPage;
