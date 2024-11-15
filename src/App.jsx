import { useState } from 'react'
import { EmbedPDF } from "@simplepdf/react-embed-pdf";


function App() {

  return (
    <>
      {/* // The PDF is displayed when rendering the component */}
      {/* <EmbedPDF
        mode="inline"
        style={{ width: 900, height: 800 }}
        documentURL="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
      /> */}

      {/* // The PDF picker is displayed when rendering the component */}
      <EmbedPDF
        mode="inline"
        style={{ width: '100%', height: 800 }}
      />

    {/* <EmbedPDF companyIdentifier="yourcompany">
      <a href="https://cdn.simplepdf.com/simple-pdf/assets/schrute-farms-form-edit.pdf">
        Opens sample.pdf
      </a>
      </EmbedPDF>;
      <EmbedPDF>
      <button>Opens the simplePDF editor</button>
    </EmbedPDF> */}
    </>
  )
}

export default App
